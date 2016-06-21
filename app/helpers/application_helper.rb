require 'date'

module ApplicationHelper
  def string_date_to_formated_date(str_date)
    date = DateTime.parse(str_date)
    date.strftime('%Y/%m/%d %H:%M')
  end
end
