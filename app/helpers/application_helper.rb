require 'date'

module ApplicationHelper
  def string_date_to_formated_date(str_date)
    return nil unless str_date
    date = DateTime.parse(str_date).in_time_zone(ENV['TZ'])
    date.strftime('%Y/%m/%d %H:%M')
  end
end
