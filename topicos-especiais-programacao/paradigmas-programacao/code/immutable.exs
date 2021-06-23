list = [1, 2, 3, 4]
IO.inspect(list) # [1, 2, 3, 4]

List.delete_at(list, -1)
IO.inspect(list) # [1, 2, 3, 4]

list ++ [1]
IO.inspect(list) # [1, 2, 3, 4]
