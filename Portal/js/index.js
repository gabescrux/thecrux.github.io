var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0');
			var yyyy = today.getFullYear();
			var hours = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
        var am_pm = today.getHours() >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        var minutes = today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
        var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
        var time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
			today = mm + '/' + dd + '/' + yyyy + " " + time;
      document.getElementById("date").innerHTML = today;