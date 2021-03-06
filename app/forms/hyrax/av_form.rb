# Generated via
#  `rails generate hyrax:work Av`
module Hyrax
  # Generated form for Av
  class AvForm < Hyrax::Forms::WorkForm
    self.model_class = ::Av
    
    def self.model_attributes(_)
      attrs = super
      attrs[:title] = Array(attrs[:title]) if attrs[:title]
      attrs[:description] = Array(attrs[:description]) if attrs[:description]
      attrs[:contributor] = Array(attrs[:contributor]) if attrs[:contributor]
      attrs
    end

    def title
      super.first || ""
    end

    def description
      super.first || ""
    end

    def contributor
      super.first || ""
    end

    self.terms -= [:keyword, :rights_statement, :subject, :creator, :contributor, :publisher, :language, :based_near, :related_url, :date_created, :source, :identifier]
    self.terms += [:collecting_area, :collection_number, :collection, :contributor, :creator, :resource_type, :rights_statement, :subject, :date_created, :date_digitized, :accession, :master_format, :extent, :source, :physical_dimensions, :processing_activity, :identifier, :archivesspace_record, :record_parent]

    self.required_fields -= [:keyword, :title, :creator, :rights_statement]
    self.required_fields += [:collecting_area, :title, :collection_number, :collection, :description, :resource_type, :creator, :contributor, :license]

  end
end
