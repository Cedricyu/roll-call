Vagrant.configure("2") do |config|

  # Backend + Database server
  config.vm.define "backend-db" do |backend_db|
    backend_db.vm.box = "ubuntu/jammy64"
    backend_db.vm.hostname = "backend-db"
    backend_db.vm.network "forwarded_port", guest: 8090, host: 8090
    backend_db.vm.network "forwarded_port", guest: 3306, host: 3306
    backend_db.vm.synced_folder "./backend", "/home/vagrant"


    backend_db.vm.provider "virtualbox" do |vb|
      vb.name = "backend_db_service"
      vb.memory = 1024
      vb.cpus = 2
    end

    backend_db.vm.provision "shell", inline: <<-SHELL
      sudo apt-get update
      sudo apt-get install -y apache2
      sudo apt-get install -y nodejs mysql-server
      sudo systemctl restart apache2
    SHELL
  end

  # Frontend server
  config.vm.define "frontend" do |frontend|
    frontend.vm.box = "ubuntu/jammy64"
    frontend.vm.hostname = "frontend"
    frontend.vm.network "forwarded_port", guest: 5173, host: 5173
    frontend.vm.synced_folder "./frontend", "/home/vagrant"

    frontend.vm.provider "virtualbox" do |vb|
      vb.name = "frontend_service"
      vb.memory = 1024
      vb.cpus = 2
    end

    frontend.vm.provision "shell", inline: <<-SHELL
      sudo apt-get update
      sudo apt-get install -y apache2
      sudo apt-get install -y nodejs
      sudo systemctl restart apache2
    SHELL
  end
end
