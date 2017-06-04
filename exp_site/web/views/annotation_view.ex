defmodule ExpSite.AnnotationView do
  use ExpSite.Web, :view

  def render("annotation.json", %{annotation: ann}) do
    %{
      id: ann.id,
      body: ann.body,
      at: ann.at,
      user: render_one(ann.user, ExpSite.UserView, "user.json")
    }
  end
end
