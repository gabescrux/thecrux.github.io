$(document).ready(function() {
    $("#frmCRCS").hide();
    $("#frmAviation").hide();
    $("#frmMaritime").hide();
   
    $("#btnAddUser").on("click", function () {
        $("#frmCRCS").show();
        $("#tblCRCS").hide();
      });
    
    $("#tblCRCS").on("click", "tr td", function (row, $el, field) {
     $("#frmCRCS").show();
               $("#tblCRCS").hide();
   });
   
   $("#tblMaritime").on("click", "tr td", function (row, $el, field) {
     $("#frmMaritime").show();
               $("#tblMaritime").hide();
   });
   
   $("#tblAviation").on("click", "tr td", function (row, $el, field) {
     $("#frmAviation").show();
               $("#tblAviation").hide();
   });
   
   $("#btnSaveCRCS").on("click", function () {
     $("#frmCRCS").hide();
               $("#tblCRCS").show();
   });
   
   $("#btnDeleteCRCS").on("click", function () {
       $("#frmCRCS").hide();
               $("#tblCRCS").show();
     });
   
   $("#btnCancelCRCS").on("click", function () {
       $("#frmCRCS").hide();
              $("#tblCRCS").show();
     });
   
   $("#btnSaveAviation").on("click", function () {
       $("#frmAviation").hide();
               $("#tblAviation").show();
     });
     
     $("#btnDeleteAviation").on("click", function () {
         $("#frmAviation").hide();
               $("#tblAviation").show();
       });
     
     $("#btnCancelAviation").on("click", function () {
         $("#frmAviation").hide();
               $("#tblAviation").show();
       }); 
   
     $("#btnSaveMaritime").on("click", function () {
         $("#frmMaritime").hide();
               $("#tblMaritime").show();
       });
       
       $("#btnDeleteMaritime").on("click", function () {
           $("#frmMaritime").hide();
               $("#tblMaritime").show();
         });
       
       $("#btnCancelMaritime").on("click", function () {
           $("#frmMaritime").hide();
               $("#tblMaritime").show();
         }); 
   
   $(function () {
   var jsonDataCall = $.getJSON("/Struts2Employees/getJSONEmployeeResult", function(result){
      jsonDataCall = result;
      var obj = JSON.parse(jsonDataCall.content);
   $('#tblCRCS').bootstrapTable({data: JSON.parse(JSON.stringify(obj))});
   });
   });
   
   $(document).ready(function(){
   $("#searchTable").on("keyup", function() {
   var value = $(this).val().toLowerCase();
   $("#tblCRCS tr").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
   });
   });
   });
   
   function queryParams() {
     return {
         type: 'owner',
         sort: 'updated',
         direction: 'desc',
         per_page: 100,
         page: 1
     };
   }
   
   });
   