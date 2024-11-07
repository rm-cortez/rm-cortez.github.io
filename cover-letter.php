<?php

/*
I would like to be given the opportunity to be considered as a candidate for this job position. I believe I do have the qualifications and skills necessary to fulfill the requirements described for this role. Throughout my career, I have made learning new technologies a passion and I have no doubt I will be a good fit for this position.

I have attached my resume for your consideration and my salary expectation is $80,000.

I look forward to hearing from you at your earliest convenience.

Thank you




Throughout my career I had different roles. At Verizon I was a Front End Developer. We dealt with texhnologies such as HTML, CSS, JS, JQuery , Bootstrap and backend technologies such as Classic ASP and PHP for our Drupal app and Wordpress site which utilized a Mysql Database.

At CHNews I was a Programmer Analyst and I was involved in getting requirements and come out with the best solution for the problem at hand. I used Adobe products for this role, our stack was made up of Actionscript for our main application, Coldfusion for Web Services so that data stored in our SQL Server DB would be integrated with the application.

I am currently unemployed and feel this position adheres to my experience as a Front End Developer.

Skills
-----
Working under deadlines requires time management. At Verizon we used Jira to track tasks and also provide estimates for our deadlines.

I have an Agile background, so deadlines must be met. If throughout the development process something does not to work, as an Agile developer , it is required to notify these so that they are mitigated and resolved.

When I was initially hired at Verizon, I was assigned a mentor so that I could get familiar with the work environment and the development process. Once I familiarized myself with these processes, I became independent and worked on my own.

End Questions
--------------

At Verizon, I collaborated on many projects. Tasks involved adding new features to existing applications, creating new UI Layouts, adding CSS styles and fixing problems as per user request.

If I am hired at Person, I would like to eventually become a Senior Software Engineer and I would set my goals based on productivity and performance.

At Verizon, I held a fully remote job position and worked on web based applications. At CHNews I worked on both Desktop and Web Based applications. My salary expectation is $80,000. My personal website is http://rcsproductions.us , please feel free to review it.

Thanks
*/

$contents =<<<EOT
I would like to be given the opportunity to be considered as a candidate for this job position. I believe
I do have the qualifications and skills necessary to fulfill all the requirements described for this role.
Throughout my career, I have made learning new technologies a passion and I have no doubt I will be a
good fit for this position.

I have attached my resume for your consideration and look forward to hearing from you at your
earliest convenience.




EOT;

$contentArr =  explode("\n", $contents);

// echo '<pre>';
// print_r($contentArr);
// echo '</pre>'


$companyName = $_REQUEST['companyName'];
$addressed = $_REQUEST['addressed'];

?>
 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title>Cover Letter</title>

   </head>
   <body>
     <iframe width="100%" height="1000px" class="resume-iframe"></iframe>

     <script src="https://rm-cortez.github.io/jsPDF-master/dist/html2canvas.min.js"></script>
     <script src="https://rm-cortez.github.io/resume-download/jsPDF-master/dist/jspdf.min.js"></script>
     <script type="text/javascript">


     function set_fontSize(pdf, size = 12 ,fontName = 'arial', fontType='normal'   ){
      pdf.setFont(fontName, fontType);
      pdf.setFontSize(size);
     }


     var margins = {
        currentLH:20,
        blockLh:10,
        lh:5

     }

     var author = {
       name:'Ronald',
       lastname:'Cortez',
       email:'rm.cortez94@gmail.com',
       address:'Lake Worth, FL',
     }

     

     var recipient = {
       name:<?php echo "'".$companyName ."'" ;?>,
       address:<?php echo "'".$addressed ."'" ;?>,
       phone:'',
       email:''
     }

     recipient.name = recipient.name.replace(/[-]/g,' ')
     recipient.address = recipient.address.replace(/[-]/g,' ')

     var jobPosition = 'Software Engineer'

     var dt = new Date().toLocaleDateString("en-US")

     var content = ''



     var pdf = new jsPDF();

     //size = 12 ,fontName = 'arial', fontType='normal'
     set_fontSize(pdf,40,'arial','bold')
     pdf.text(110,margins.currentLH  , `${author.name} ${author.lastname}`);

     margins.currentLH += margins.blockLh
     set_fontSize(pdf,12,'arial')
     pdf.text(110,margins.currentLH  , `${author.address}`);

     margins.currentLH += margins.lh
     pdf.text(110,margins.currentLH  , `${author.email}`);

     margins.currentLH += margins.blockLh
     margins.currentLH += margins.blockLh

     set_fontSize(pdf,12)
     pdf.text(10,margins.currentLH  , `${dt}`);

     margins.currentLH += margins.blockLh
     set_fontSize(pdf,25,'arial','bold')
     pdf.text(10,margins.currentLH  , `${recipient.name}`);

     
     margins.currentLH += margins.lh
     margins.currentLH += margins.lh

     set_fontSize(pdf,15,'arial','normal')
     pdf.text(10,margins.currentLH  , `${recipient.address}`);

     set_fontSize(pdf)

     margins.currentLH += margins.lh
     pdf.text(10,margins.currentLH  , `${recipient.phone}`);
     margins.currentLH += margins.lh
     pdf.text(10,margins.currentLH  , `${recipient.email}`);


     margins.currentLH += margins.blockLh
     margins.currentLH += margins.blockLh
     pdf.text(10,margins.currentLH  , `RE: ${jobPosition}`);

     margins.currentLH += margins.blockLh
     margins.currentLH += margins.blockLh
     pdf.text(10,margins.currentLH  , `Dear Hiring Manager,`);




     var content = [

       <?php
          foreach ($contentArr as $value) {
            echo " `$value`,";
          }
       ?>

     ]

     margins.currentLH += margins.blockLh
     margins.currentLH += margins.blockLh

     for(var i=0; i < content.length;i++){

       pdf.text(10,margins.currentLH  , `${content[i]}`);
       margins.currentLH += margins.lh
       margins.currentLH += margins.lh
     }





     margins.currentLH += margins.blockLh
     pdf.text(10,margins.currentLH  , `Sincerely,`);
     margins.currentLH += margins.lh
     margins.currentLH += margins.lh

     set_fontSize(pdf,12,'arial','bold')
     pdf.text(10,margins.currentLH  , `${author.name} ${author.lastname}`);



      document.querySelector('.resume-iframe').src = pdf.output('datauristring')

     </script>
   </body>
 </html>
