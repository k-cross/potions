defmodule ExpSite.PageController do
  use ExpSite.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
