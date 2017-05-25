# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :exp_site,
  ecto_repos: [ExpSite.Repo]

# Configures the endpoint
config :exp_site, ExpSite.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Tkc+Hz9tR146iwdfJAwEiBtImH50vawrgUNbqNOqGulcLmKVcNi36O2DappG56DU",
  render_errors: [view: ExpSite.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ExpSite.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
