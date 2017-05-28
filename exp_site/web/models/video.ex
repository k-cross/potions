defmodule ExpSite.Video do
  use ExpSite.Web, :model

  @primary_key {:id, ExpSite.Permalink, autogenerate: true}
  schema "videos" do
    field :url, :string
    field :slug, :string
    field :title, :string
    field :description, :string
    belongs_to :user, ExpSite.User
    belongs_to :category, ExpSite.Category

    timestamps()
  end

  @required_fields ~w(url title description)
  @optional_fields ~w(category_id)

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> slugify_title()
    |> assoc_constraint(:category)
  end

  defp slugify_title(changeset) do
    if title = get_change(changeset, :title) do
      put_change(changeset, :slug, slugify(title))
    else
      changeset
    end
  end

  defp slugify(str) do
    str
    |> String.downcase()
    |> String.replace(~r/[^\w-]+/u, "-")
  end
end

defimpl Phoenix.Param, for: ExpSite.Video do
  def to_param(%{slug: slug, id: id}) do
    "#{id}-#{slug}"
  end
end
