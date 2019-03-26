# frozen_string_literal: true

module Api
  module V1
    class CategoriesController < ApplicationController
      skip_before_action :authenticate_user_from_token!, only: [:index]

      def index
        categories = Category.all
        render status: 200, json: categories
      end
    end
  end
end
