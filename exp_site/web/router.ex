defmodule ExpSite.Router do
  use ExpSite.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug ExpSite.Auth, repo: ExpSite.Repo
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/manage", ExpSite do
    pipe_through [:browser, :authenticate_user]

    resources "/videos", VideoController
  end

  scope "/", ExpSite do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    resources "/users", UserController, only: [:index, :show, :new, :create]
    resources "/sessions", SessionController, only: [:new, :create, :delete]
    get "/watch/:id", WatchController, :show
  end

  # Other scopes may use custom stacks.
  # scope "/api", ExpSite do
  #   pipe_through :api
  # end
end
