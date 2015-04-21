// JavaScript Document
$(document).ready(function(e) {
//com document.addEventListener("deviceready",function(){
$('#btndatos').on('click', function (){
	//alert('hola cara de bola...!'); 
	$('body').pagecontainer ("change","#datos",{transition:"flip"});
});//click btndatos
$('#btnresultado').on('click', function (){
	
	$('body').pagecontainer("change","#resultado",{transition:"flip"});
	var imc;
	var peso=$('#txtpeso').val();
	var talla=$('#txttalla').val();
	imc=(peso/(talla*talla));
	$('#imc').text('nombre ' +$('#txtnombre').val()+' imc= '+imc);
	//alert(peso);
	//alert(talla);
	});//click btnresultado
	

// }); 
});

