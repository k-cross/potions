defmodule HoundScrapper do
  use Hound.Helpers

  def fetch_ip(bl_number) do
    Hound.start_session

    navigate_to "https://www.pilship.com/--/120.html?refnumbers=#{bl_number}&search_type=bl"
    :timer.sleep(2000)

    find_element(:id, "result_wrapper") |> inner_html |> IO.puts
    #element = find_element(:id, "result_wrapper")
    #element2 = find_within_element(element, :id, "container_info_main")

    #IO.puts inner_html(find_within_element(element, :id, "wrapper_ref_info"))
    #IO.puts inner_html(element2)

    Hound.end_session
  end
end
