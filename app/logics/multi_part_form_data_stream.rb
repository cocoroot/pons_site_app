require 'net/http'
require 'stringio'

class MultiPartFormDataStream
  attr_reader :data

  def initialize(boundary = nil)
    @boundary = boundary || 'boundary'

    @end_data = StringIO.new(['', '--' + @boundary + '--', ''].join(new_line))
    @data = []
    append_end_data
  end

  def add_form(name, value)
    delete_end_line
    stream = [boundary]
    stream << content_disposition(name)
    stream << ''
    stream << value
    stream << ''
    @data.push(StringIO.new(stream.join(new_line)))
    append_end_data
  end

  def add_json(name, value)
    delete_end_line
    stream = [boundary]
    stream << content_disposition(name)
    stream << 'Content-Type: application/json'
    stream << ''
    stream << ''
    stream << value
    stream << ''
    @data.push(StringIO.new(stream.join(new_line)))
    append_end_data
  end

  def add_file(name, filename, content_type, file)
    delete_end_line
    stream = [boundary]
    stream << content_disposition_file(name, filename)
    stream << "Content-Type: #{content_type}"
    stream << ''
    stream << ''
    @data.push(StringIO.new(stream.join(new_line)))
    @data.push(file)
    stream << ''
    append_end_data
  end

  def content_type
    "multipart/form-data; boundary=#{@boundary}"
  end

  def size
    @data.reduce(0) { |a, e| a + e.size }
  end

  def eof?
    @data.empty? || @data.first.eof?
  end

  def read(len = nil, buf = nil)
    unless @data.empty?
      ret = @data.first.read(len, buf)
      @data.shift if @data.first.eof?
    end
    ret
  end

  private

  def boundary
    "--#{@boundary}"
  end

  def content_disposition(name)
    "Content-Disposition: form-data; name=\"#{name}\""
  end

  def content_disposition_file(name, filename)
    "#{content_disposition(name)}; filename=\"#{filename}\""
  end

  def new_line
    "\r\n"
  end

  def delete_end_line
    @data.delete_at(-1)
  end

  def append_end_data
    @data.push(@end_data)
  end
end
