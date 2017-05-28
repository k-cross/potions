defmodule ExpSite.WatchController do
  use ExpSite.Web, :controller
  alias ExpSite.Video

  def show(conn, %{"id" => id}) do
    video = Repo.get!(Video, id)
    render conn, "show.html", video: video
  end
end
