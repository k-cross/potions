# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     ExpSite.Repo.insert!(%ExpSite.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias ExpSite.Repo
alias ExpSite.Category

for category <- ~w(Action Drama Romance Comedy Sci-Fi Educational Academic Activity Practical) do
  Repo.get_by(Category, name: category) ||
    Repo.insert!(%Category{name: category})
end
