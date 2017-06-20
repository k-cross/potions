# Takes a nested list like structure and flattens it to a single list
defmodule FlattenList do
  def flatten([]), do: [] # Base case

  def flatten([ head | tail ]) do # Non-empty list with more than one element
    flatten(head) ++ flatten(tail)
  end

  def flatten(head), do: [ head ] # List with one element
end
