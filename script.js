$(function(){
	// console.log(getCookie('coocMyTovar'));
	// document.cookie = "coocMyTovar=0";
	// myTestFunction(7, 'Hello', 25);
	// function myTestFunction (x, y, z){
	// 	alert(x + y + z);
	// }







	sum = 0;
	myCookieArrey = 0;
	localSum = 0;
	$('#name').val(getCookie('saveName'));
	$('#email').val(getCookie('saveEmail'));
	$('#phone').val(getCookie('savePhone1'));


$("#phone").inputmask("+380(99)99-99-999");
$('.order').click(function(){
	var myCheckName = checkName();
	myCheck($('#name').val());
	var myPhone = phone();
	var myEmail = email();
	if(myCheckName == 1 && myPhone == 1 && myEmail == 1){
		return true;
	}
	else{
		return false;
	}
});

	$('.buy').click(function(){
		var buyName = $(this).prev().html();
		var buyArticle = $(this).prev().prev().html();
		var buyPrice = Number($(this).prev().prev().prev().html());
		var buyImage = $(this).prev().prev().prev().prev().html();
		var num = Number($('.num').val());
		var buy = '<span>'+ buyName +'</span>' + ' ' + '<span>'+buyArticle+'</span>' + ' ' + '<span class="all-price">' + buyPrice + '</span>'  + buyImage;
		
		if(myCookieArrey == 0){
			$('.card-wrap').addClass('vis');
		$('.card-inner').append('<div class="my-tovar">  '+ buy +'<button class="minus" onclick="minus($(this))">-</button> <input class="num" onblur="myBlur($(this))" value="1" type="text"><button class="plus" onclick="plus($(this))">+</button><span class="price1" >'+buyPrice+'</span> <div class="del" title="Видалити" onclick="deleteTovar($(this))">X</div> <input type="hidden" class="my-check" value="0"> </div>' );
		$(this).attr('disabled', 'disabled');
		$(this).html('В корзині');
		sum = sum+buyPrice;
		$('.all-sum').html(sum);

		myCookieArrey = ['<div class="buyArticle">' +buyArticle+ '</div>' +' '+'<div class="buyPrice">' +buyPrice+'</div>' +' '+ '<div class="buyName">' +buyName+ '</div>' + '- <div class="buyNumber"> 1 од. </div>'  + '<input class="my-count" type="hidden" value="0">'];
			myCount = 1;
			// console.log('товар первый');
			// console.log(getCookie('coocMyTovar'));
			
		// console.log(myCount);
		}
		else{

			$('.card-wrap').addClass('vis');
		$('.card-inner').append('<div class="my-tovar">  '+ buy +'<button class="minus" onclick="minus($(this))">-</button> <input class="num" onblur="myBlur($(this))" value="1" type="text"><button class="plus" onclick="plus($(this))">+</button><span class="price1" >'+buyPrice+'</span> <div class="del" title="Видалити" onclick="deleteTovar($(this))">X</div> <input type="hidden" class="my-check" value="'+myCount+'"> </div>' );
		$(this).attr('disabled', 'disabled');
		$(this).html('В корзині');
		sum = sum+buyPrice;
		$('.all-sum').html(sum);

			// console.log(myCount);
			myCookieArrey = myCookieArrey +'<br>'+ ['<div class="buyArticle">' +buyArticle+ '</div>' +' '+'<div class="buyPrice">' +buyPrice+'</div>' +' '+ '<div class="buyName">' +buyName+ '</div>' + '-<div class="buyNumber"> 1 од. </div>' + '<input class="my-count"  type="hidden" value="'+myCount+'">'];
			myCount = myCount+1;
			// console.log('товар не первый');
			// console.log(getCookie('coocMyTovar'));

		// console.log(myCount);
		}

		
			document.cookie = "coocMyTovar=0";
			document.cookie = "coocMyTovar="+myCookieArrey;

	});


	$('.close').click(function(){
		$('.card-wrap').removeClass('vis');
	});
	$('.open-card').click(function(){
		$('.card-wrap').addClass('vis');
	});
			
			
});

function deleteTovar(x){
		x.parent().remove();
		var art = x.parent().children().next().html();
		$('.'+art).removeAttr('disabled');
		$('.'+art).html('Купити');
		var delSum = x.prev().prev().prev().prev().prev().prev().html();
		sum = sum-delSum;
		$('.all-sum').html(sum);
		// Y - порядковий номер елементу масиву для учота колличества товаров.
		y = x.next().val();
		console.log('удаляемый ' + y);

		// некоректный расчет при удалении общего колличечтва товара
		// учитывать нужно кол. товарров в масиве кук, а не глобальная переменная

		myCount = myCount-1;
		console.log('осталось ' + myCount);


	// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);


	var tmpInnerArrey = tmpArreySpl[y].split('-');
	// console.log(tmpInnerArrey);

	
	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	tmpArreySpl.splice(y,1);
	console.log(tmpArreySpl);


	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+(tmpArreySpl.join('<br>'));
	// console.log(getCookie('coocMyTovar'));
	myCookieArrey = tmpArreySpl.join('<br>');
	// console.log(myCookieArrey);


	

		};

function plus(x){
	var numbPl = Number(x.next().html());
	var valPl = Number(x.prev().val());
	// Y - порядковий номер елементу масиву для учота колличества товаров.
	var y =x.next().next().next().val();
	// console.log(y);

			if(valPl > 9){
				return false;

	// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);

	var tmpInnerArrey = tmpArreySpl[y].split('-');
	console.log(tmpInnerArrey);

	tmpInnerArrey.splice(2,1);

	tmpInnerArrey[1] = '<div class="buyNumber">' + 10+' од. </div>';
	console.log(tmpInnerArrey);

	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	// console.log(tmpArreySpl);

	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+tmpArreySpl.join('<br>');
			}

			else{
				x.prev().val(valPl+1);
				x.prev().prev().prev().prev().html(numbPl*(valPl+1));

	// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);

	var tmpInnerArrey = tmpArreySpl[y].split('-');
	// console.log(tmpInnerArrey);

	tmpInnerArrey.splice(2,1);

	tmpInnerArrey[1] = '<div class="buyNumber">' + (valPl+1)+' од. </div>';
	// console.log(tmpInnerArrey);

	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	// console.log(tmpArreySpl);

	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+tmpArreySpl.join('<br>');
			}
			sum = sum+numbPl;
			okChangeSum(sum);
		};
function minus(x){
			var numbMin = Number(x.next().next().next().html());
			var valMin = Number(x.next().val())-1;
			// Y - порядковий номер елементу масиву для учота колличества товаров.
			var y =x.next().next().next().next().next().val();
			// console.log(y);

			if( valMin < 1){
				return false;

	// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);

	var tmpInnerArrey = tmpArreySpl[y].split('-');
	// console.log(tmpInnerArrey);

	tmpInnerArrey.splice(2,1);

	tmpInnerArrey[1] ='<div class="buyNumber">' + 1+' од. </div>';
	// console.log(tmpInnerArrey);

	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	// console.log(tmpArreySpl);

	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+tmpArreySpl.join('<br>');
			}
			else{
				x.next().val(valMin);
				x.prev().prev().html(numbMin*valMin);


	// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);

	var tmpInnerArrey = tmpArreySpl[y].split('-');
	// console.log(tmpInnerArrey);

	tmpInnerArrey.splice(2,1);

	tmpInnerArrey[1] ='<div class="buyNumber">' + valMin+' од. </div>';
	// console.log(tmpInnerArrey);

	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	// console.log(tmpArreySpl);

	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+tmpArreySpl.join('<br>');
			}
			sum = sum-numbMin;
			okChangeSum(sum);
			// test(sum, x);
		};
function okChangeSum (sum){
			$('.all-sum').html(sum);
			$('.all-sum').css('color','red');
}
// function test (sum, obg){
// 	console.log(sum);
// 	console.log(obg);
// }

function myBlur(x){
	var Bl = x.val();
	var sumAll = Number(x.prev().prev().prev().html());
	var price = Number(x.next().next().html());
	x.prev().prev().prev().html(Bl*price);
	
	// Y - порядковий номер елементу масиву для учота колличества товаров.
	var y =x.next().next().next().next().val();
	// console.log(y);


	if(Bl > 10){
		var priceElement = x.next().next().html();
		var priceTovar = x.prev().prev().prev().html();
		x.val(10);
		x.prev().prev().prev().html(priceElement*10);
		// console.log(x.prev().prev().prev());

		var summa = sum-sumAll;
		var tmpSum = price*10;
		sum = summa+tmpSum;
		$('.all-sum').html(sum);


		// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);


	var tmpInnerArrey = tmpArreySpl[y].split('-');
	// console.log(tmpInnerArrey);

	tmpInnerArrey.splice(2,1);

	tmpInnerArrey[1] = '<div class="buyNumber">' + 10 +' од. </div>';
	// console.log(tmpInnerArrey);

	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	// console.log(tmpArreySpl);

	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+tmpArreySpl.join('<br>');
	}

	else if( Bl < 1){
		var priceElement = x.next().next().html();
		var priceTovar = x.prev().prev().prev().html();
		x.val(1);
		x.prev().prev().prev().html(priceElement*1);
		// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);


	var tmpInnerArrey = tmpArreySpl[y].split('-');
	// console.log(tmpInnerArrey);

	tmpInnerArrey.splice(2,1);

	tmpInnerArrey[1] ='<div class="buyNumber">' + 1+' од. </div>';
	// console.log(tmpInnerArrey);

	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	// console.log(tmpArreySpl);

	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+tmpArreySpl.join('<br>');
	}

	else{
		var summa = sum-sumAll;
		var tmpSum = price*Bl;
		sum = summa+tmpSum;
		$('.all-sum').html(sum);

		// console.log(getCookie('coocMyTovar'));

	var tmpArrey = getCookie('coocMyTovar');
	// console.log(tmpArrey);

	var tmpArreySpl = tmpArrey.split('<br>');
	// console.log(tmpArreySpl);
	// console.log(tmpArreySpl.length);


	var tmpInnerArrey = tmpArreySpl[y].split('-');
	console.log(tmpInnerArrey);

	tmpInnerArrey.splice(2,1);

	tmpInnerArrey[1] ='<div class="buyNumber">' + Bl+' од.</div>';
	// console.log(tmpInnerArrey);

	var finalArrey = tmpInnerArrey.join('-');
	// console.log(finalArrey);

	tmpArreySpl[y] = finalArrey;
	// console.log(tmpArreySpl);

	tmpArreySpl.join('<br>');
	// console.log(tmpArreySpl.join('<br>'));
	
	document.cookie = "coocMyTovar="+tmpArreySpl.join('<br>');
	}

};


$('.order').click(function(){
	document.cookie = "coocSum="+sum;
});



function checkName(){
	var clientName = $('#name').val();
	if(clientName == ""){
		$('#name').addClass('error');
		$('.error-name').html('Введіть П.І.П.');
		return 2;
	}
	else{
		$('#name').removeClass('error');
		myCount = $('#name').val().split(/ +(?:\S)/).length;
		
		if(myCount > 3){
				$('.error-name').html('Ви ввели забагато слів');
				$('#name').addClass('error');
				return 2;
			}
		else{
				if(myCount < 2){
					$('.error-name').html('Ви ввели замало слів');
					$('#name').addClass('error');
					return 2;
				}
			else{
					$('.error-name').html('');
					return 1;
				}
			}			
		}
};
function myCheck(x){
 var value1=x
  // .replace(/ /g, ".")
  .replace(/_/g, "-")
  .replace(/\.+/g, ".")
  .replace(/\-+/g, "-")
  .replace(/[^\w.-]|[A-Z]^[.-]/g, "");
  value2=value1.replace(/[.-]$/, "")
  console.log(value2);
  if(value2 == ""){

  }
  else{
  	$('#name').val("");
  	$('.error-name').html('Введіть символи кирилиці');
  }
}

// function myCheckkk(x){
//  var value1=x
//   .replace(/ /g, ".")
//   .replace(/_/g, "-")
//   .replace(/\.+/g, ".")
//   .replace(/\-+/g, "-")
//   .replace(/[^\w.-]|[A-Z]|^[.-]/g, "");
//   value2=value1.replace(/[.-]$/, "")
// 	 console.log(value2);
//    if(value2 == ""){
//    	$('#name').val("");
//   	$('.error-name').html('Введіть символи латиниці');
//   }
//   else{
  	
//   }
// };

function phone (){
	var myPhone = $('#phone').val();
	var numberPhone = myPhone.replace(/\D+/g,'').length;
	if(numberPhone == 12){
		$('#phone').removeClass('error');
		$('.error-phone').html('');
		return 1;
	}
	else{
		$('#phone').addClass('error');
		$('.error-phone').html('Введіть вірний формат номеру телефону!')
		return 2;
	}
}

function email (){
	var myEmail = $('#email').val();
	console.log(myEmail);
		if(myEmail == '') {
			$('#email').addClass('error');
            $('.error-email').html('Зaповніть поле email!');
            return 2;
        } else {
            $('#email').removeClass('error');
            $('.error-email').html('');
             var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	              if(pattern.test($('#email').val())){
	              		return 1;
	              }
	              else{
	              	$('#email').addClass('error');
	            	$('.error-email').html('Введіть вірний формат email!');
	            	return 2;
             	 }
        }
}

function myBlurName(){
	var myName = $('#name').val();
	document.cookie = "saveName="+myName;
	// console.log(getCookie('saveName'));
};

function myBlurPhone(){
	var myPhone = $('#phone').val();
	document.cookie = "savePhone1="+myPhone;
	// document.cookie = "saveName="+'';

};


function myBlurEmail(){
	var myEmail = $('#email').val();
	document.cookie = "saveEmail="+myEmail;
};

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

var arr = ['хлеб', 2, 'молоко'];
// console.log (arr[1]);


var numbers_1 = [1,2,3,4,5];
var numbers_2 = [6,7,8,9,10];
var numbers_3 = [11,12,13,14,15];

var numbers = [16,numbers_1, 17, numbers_2, 18, numbers_3,19];
// console.log(numbers);



var myArray = ['хлеб', 2, 'молоко'];
numbers = [16,numbers_1, 17, numbers_2, 18, numbers_3,19, myArray];
// console.log(numbers[7][2]);
var i;
for(i=0; i<myArray.length; i++){
	// console.log(myArray[i]);
}
var y=0;
for(i=0; i<numbers_2.length; i++){
	y=y+numbers_2[i];
}
	// console.log(y);

document.cookie = "saveTest="+numbers;
// console.log(getCookie('saveTest'));

var tovars_1 = ['банан', 4];
var tovats_2 = ['хлеб', 8];
var tovars_3 = ['лемон', 5];
var tovars_4 = ['конфеты', 15];
// console.log(tovars_1);

var tovars = [tovars_1, tovats_2, tovars_3, tovars_4];
// console.log(tovars.length);
var y=0;
for(i=0; i<tovars.length; i++){
	// console.log(tovars[i][1]);
	y=y+tovars[i][1];
}
// console.log(y);
	tovars.splice(1, 1);
// console.log(tovars);
	for(i=0; i<tovars.length; i++){
// console.log(tovars[i][i]);
}

var myObject = {'one': 'привет', 'two': 'hello'}
// console.log(myObject.two);
myObject.three = 'test';
// console.log(myObject);

var MyObject = new Object();//Переменные
MyObject.id = 5; //Число
MyObject.name = "Sample"; //Строка
// console.log(MyObject);







// $('.btn-ajax').click(function(e){
//         var vars='hello';
//         var furl='test.php';
//         var nameTest = $('.my-avtoris').val();
//         // console.log(nameTest);
//         var passTest = $('.pass').val();
//         // console.log(passTest);
//         ajax_request=$.ajax({
//             type: "POST",
//             url: furl,
//             dataType: 'json',
//             data: vars,
//             success: function(data)
//             {
// 			console.log(data);

//             	// user = JSON.parse(data);
//              //  console.log(user);
//               if(nameTest == data.name1){
//               	if(passTest == data.password1){
//               		alert('авторизация прошла успешно');
//               	}
//               }
//               else if(nameTest == data.name2){
//               		if(passTest == data.password2){
//              		 	alert('авторизация прошла успешно');
//               		}
//               }
//               else if(nameTest == data.name3){
//               		if(passTest == data.password3){
//               			alert('авторизация прошла успешно');
//               		}
//               }
//               else{
//               	alert('введен неверный логин');
//               }

//             }
//         });
//     });



// $('.btn-ajax').click(function(e){

// 		var arrObjects = []; // объявление массива
 
// 	arrObjects[0] = {
// 	    name: "Вася",
// 	    password: "123"
// 	}
// 	arrObjects[1] = {
// 	    name: "Петя",
// 	    password: "456"
// 	}
// 	arrObjects[2] = {
// 	    name: "Саша",
// 	    password: "789"
// 	}
// 		var vars='hello';
//         var furl='test.txt';
//         var nameTest = $('.my-avtoris').val();
//         // console.log(nameTest);
//         var passTest = $('.pass').val();
//         // console.log(passTest);
//         var flag = 0;
// 	for(i=0; i<arrObjects.length; i++){
// 	var myArroject = arrObjects[i]; 
// 	// console.log(myArroject.name);
// 	if(nameTest == myArroject.name){
// 		if(passTest == myArroject.password){
// 			flag = 1;
// 		}
		
// 	}

// }
// if(flag == 1){
// 			alert('авторизация прошла успешно');
// }
// else{
// 	alert('Вы ввели неверно логин или пароль');
// }



	// console.log(flag);

        
 //        ajax_request=$.ajax({
 //            type: "POST",
 //            url: furl,
 //            dataType: 'json',
 //            data: vars,
 //            success: function(data)
 //            {
            

 //            }
 //        });
 //    });



$('.btn-ajax').click(function(e){
        var vars='hello';
        var furl='test1.txt';
        var nameTest = $('.my-avtoris').val();
        // console.log(nameTest);
        var passTest = $('.pass').val();
        // console.log(passTest);
        ajax_request=$.ajax({
            type: "POST",
            url: furl,
            dataType: 'json',
            // data: vars,
            success: function(data)
            {
            	var passTest = $('.pass').val();
			console.log(data);
				var arrObjects = data;
            	// user = JSON.parse(data);
             //  console.log(user);
             	for(i=0; i<arrObjects.length; i++){
					var myArroject = arrObjects[i]; 
					// console.log(myArroject.name);
							// console.log(passTest);
							console.log(myArroject.password);
					if(nameTest != myArroject.name){
						console.log(nameTest);
						console.log(myArroject.name);
						$('.my-avtoris').addClass('error');
						
					}
					else{
						if(passTest != myArroject.password){
							$('.pass').addClass('error');
							
						}
						else{
							$('.pass').removeClass('error');
							localStorage.setItem('user', nameTest);
							location.href = 'http://localhost/project9/lk.html';
							
							}
						$('.my-avtoris').removeClass('error');
						return false;
						}

				}
            
            }

        });

    });






// $('.btn-ajax').click(function(e){
//         var vars='hello';
//         var furl='test1.txt';
//         var nameTest = $('.my-avtoris').val();
//         // console.log(nameTest);
//         var passTest = $('.pass').val();
//         // console.log(passTest);
//         ajax_request=$.ajax({
//             type: "POST",
//             url: furl,
//             dataType: 'json',
//             // data: vars,
//             success: function(data)
//             {
// 			console.log(data);
// 				var arrObjects = data;
//             	// user = JSON.parse(data);
//              //  console.log(user);
//              	for(i=0; i<arrObjects.length; i++){
// 				var myArroject = arrObjects[i]; 
// 				// console.log(myArroject.name);
// 				if(nameTest == myArroject.name){
// 					nameFlag = 1;
					

// 					}
// 				else{
// 					nameFlag = 0;

// 					// if(passTest != myArroject.password){
// 					// 	passFlag = 0;
// 					// 	}
// 					// 	else{
// 					// 		passFlag = 1;
// 					// 		// flag = 1;
// 					// 		// alert('все ок');
// 					// 		localStorage.setItem('user', nameTest);
// 					// 		location.href = 'http://localhost/project9/lk.html';

// 					// 	}

// 					}

// 				}

// 				console.log(nameFlag);
// 					 if(nameFlag == 1){
//         				$('.my-avtoris').removeClass('error');
// 			        }
// 				        else{
// 				        	$('.my-avtoris').addClass('error');
// 				        }
            
//             }

//         });
//         // console.log(nameFlag);
       
//     });




