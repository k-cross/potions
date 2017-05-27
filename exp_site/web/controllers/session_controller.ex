defmodule ExpSite.SessionController do
  use ExpSite.Web, :controller

  def new(conn, _) do
    render conn, "new.html"
  end

  def delete(conn, _) do
    conn
    |> ExpSite.Auth.logout()
    |> redirect(to: page_path(conn, :index))
  end

  def create(conn, %{"session" => %{"username" => user, "password" => pass}}) do
    case ExpSite.Auth.login_by_username_pw(conn, user, pass, repo: Repo) do
      {:ok, conn} ->
        conn
        |> put_flash(:info, "Welcome back!")
        |> redirect(to: page_path(conn, :index))
      {:error, _reason, conn} ->
        conn
        |> put_flash(:error, "Invalid un/pw combination")
        |> render("new.html")
    end
  end
end
