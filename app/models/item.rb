class Item < OpenStruct
  def self.load(line)
    new(JSON.parse(line))
  end

  def self.dumb(item)
    item.to_json.to_s
  end

  def rating
    super.to_i
  end

  def attributes=(new_attrs)
    self.title = new_attrs[:title]
    self.picture = new_attrs[:picture]
    self.link = new_attrs[:link]
  end

  def to_s
    title
  end

  def as_json(options)
    { id: id, title: title, rating: rating, picture: picture, link: link }
  end

  def to_param
    id
  end
end
