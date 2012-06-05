module ApplicationHelper
  def format(text)
    sanitize(markdown(text))
  end

  def markdown(text)
    BlueCloth.new(text).to_html
  end
end
