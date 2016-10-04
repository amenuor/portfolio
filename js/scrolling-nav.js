//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //safe emails
    $("a[rel='email']").each(function(){
  		// Modify the mailto: value
  		var mailtoVal = $(this).attr('href');
  		mailtoVal = mailtoVal.replace("[email]","mailto:");
  		mailtoVal = mailtoVal.replace("[at]","@");
  		mailtoVal = mailtoVal.replace("[dot]",".");
  		// Auto-generate title tags for users
  		var mailtoTitle = mailtoVal.replace("mailto:","Email: ");
  		$(this).attr('title',mailtoTitle);
  		// onClick Event
  		$(this).click(function(){
  			window.location.href = mailtoVal;
  			return false;
  		});
	   });

    var ctx = document.getElementById("myChart");
        var experienceInSecurityAndWebDev = new Date().getFullYear()-2006; /* Beginning studies Bachelor */
        var experienceInSecurityAndWebDev = new Date().getFullYear()-2006; /* Beginning studies Bachelor*/
        var experienceInMobDevAndCloudComp = new Date().getFullYear()-2011; /* Beginning carrear in Danske Bank */
        var experienceInMobDev = new Date().getFullYear()-2011; /* Beginning carrear in Danske Bank */
        var experienceInDistSyst = new Date().getFullYear()-2009; /* Beginning studies Master */
        var experienceInTechLead = new Date().getFullYear()-2013; /* Beginning TechLead carrear */

        var data = {
          labels: ["IT Security", "Web Development", "Mobile Development", "Distributed Systems", "Cloud Computing", "International Tech Lead"],
          datasets: [
            {
              label: "My Skills by years of experience",
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
              data: [experienceInSecurityAndWebDev,
                experienceInSecurityAndWebDev,
                experienceInMobDevAndCloudComp,
                experienceInDistSyst,
                experienceInMobDevAndCloudComp,
                experienceInTechLead],
            }
          ]
        };

        var myBarChart = new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true,
                  fontColor: 'rgb(255, 255, 255)'
                }
              }],
              xAxes: [{
                ticks: {
                  fontColor: 'rgb(255, 255, 255)'
                }
              }]

            },
            legend: {
              labels: {
                boxWidth: 0,
                fontColor: 'rgb(255, 255, 255)',
                padding: 5
              }
            }
          }
        });

});
