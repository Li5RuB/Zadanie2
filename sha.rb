require 'sha3'
pwd = (Dir.pwd)
for file in Dir[pwd+"/*"] do
    print(file.split('/').last+" "+ SHA3::Digest::SHA256.file(file).hexdigest+"\n")
end
