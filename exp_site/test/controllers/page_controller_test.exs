defmodule ExpSite.PageControllerTest do
  use ExpSite.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    assert html_response(conn, 200) =~ "Welcome to LR Labs's Potions"
  end
end
