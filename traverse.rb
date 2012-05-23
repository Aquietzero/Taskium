=begin
  traverse.rb traverse the files in a given directory.
=end 

result = { :name => }

def traverse(path)
  if FileTest.directory?(path)
    while name = dir.read
      next if name == '.'
      next if name == '..'
      traverse(path + '/' + name)
    end
    dir.close
  else
    process_file(path)
  end
end
