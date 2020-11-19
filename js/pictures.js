//фотографии
var photos = [];
//минимальной кол-во лайков
var MIN_LIKES = 15;
//мак-ое кол-во лайков
var MAX_LIKES = 200;
//набор комментариев
var coments = [
	'Всё отлично!', 'В целом всё неплохо. Но не всё.',
 	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
 	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
   	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
   	'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
   ];
//набор описаний для фотографий
 var description = [
 	'Тестим новую камеру!',
 	'Затусили с друзьями на море',
 	'Как же круто тут кормят',
 	'Отдыхаем...',
 	'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
 	'Вот это тачка!',
 ];
//набор аватаров
 var avatars = [0,1,2,3,4,5];
 //сравниваем комментарии, чтобы они не были одинаковыми
 var firstComment = coments[Math.floor(Math.random()*coments.length)];
 var secondComment = coments[Math.floor(Math.random()*coments.length)];
 var makeDiffrentComments = new function(){
 	if(secondComment === firstComment){
 		secondComment = coments[Math.floor(Math.random()*coments.length)];
 	}
 }; 
//заполняем данные для фото
var setPhotoInfo = new function(){
	for(var i = 1; i <= 26; i++){
		var photo = photos.push(
			{
				url: 'photos/' + i + '.jpg',
				likes: Math.floor(Math.random() * ((MAX_LIKES+1) - MIN_LIKES)) + MIN_LIKES,
				coments: [firstComment, secondComment],
				description: description[Math.floor(Math.random()*description.length)]
			}
		);	
	}	
}; 
//шаблон фотографии
var pictureTemplate = document.querySelector('#picture-template')
.content
.querySelector('.picture');
//список фотографий
var pictureList = document.querySelector('.pictures');
//заполняем список фотографий устанавливая значения для шаблонов
var setPhotoList = new function(){
	for(var i = 0; i < photos.length; i++){
		var photoElement = pictureTemplate.cloneNode(true);

		photoElement.querySelector('img').src = photos[i].url;
		photoElement.querySelector('.picture-likes').textContent = photos[i].likes;
		photoElement.querySelector('.picture-comments').textContent = photos[i].coments.length;

		pictureList.appendChild(photoElement);
	}
}; 
//большая фотография (раскрывается при клике)
var bigPicture = document.querySelector('.gallery-overlay');
bigPicture.classList.remove('hidden');
document.querySelector('.gallery-overlay-image').src = photos[0].url;
document.querySelector('.likes-count').textContent = photos[0].likes;
document.querySelector('.comments-count').textContent = photos[0].coments.length;
document.querySelector('.social-caption').textContent = photos[0].description;
//закрываем большую фотографию по клику на кресте
var closeBigPicture = document.querySelector('.gallery-overlay-close');
//шаблон для комментария
var comentsTemplate = document.querySelector('#social-template')
.content
.querySelector('.social-comment-text');

var comentList = document.querySelector('.social-comment-list');
//заполняем список комментариев на сайте перебирая комментарии фотографии и применяя случайные аватары
var setComments = new function(){
	for(var x = 0; x < photos[0].coments.length; x++){
		var commentElement = comentsTemplate.cloneNode(true);

		commentElement.querySelector('.social-text').textContent = photos[0].coments[x];
		commentElement.querySelector('.social-picture').src =
	 	'img/icons/' + Math.floor(Math.random()*avatars.length) + '.svg';

	 	comentList.appendChild(commentElement);
	}
}; 



var closeBigPicture = function(){
	bigPicture.classList.add('hidden');
	console.log('click');
};