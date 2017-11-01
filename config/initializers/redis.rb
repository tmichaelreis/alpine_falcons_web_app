uri = URI.parse(ENV["REDIS_TO_GO_URL"] || "redis://localhost:6379/" )
REDIS = Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)