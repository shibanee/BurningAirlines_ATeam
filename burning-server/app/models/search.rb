# == Schema Information
#
# Table name: searches
#
#  id          :integer          not null, primary key
#  origin      :text
#  destination :text
#  date        :date
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Search < ApplicationRecord
end
