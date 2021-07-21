---
# An instance of the Blank widget with a Gallery page element.
# Documentation: https://wowchemy.com/docs/getting-started/page-builder/
widget: blank

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: Gallery
subtitle:

design:
  columns: '2'
---
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<title>Simple Lightbox - Responsive touch friendly Image lightbox</title>
	<link href='dist/simplelightbox.min.css' rel='stylesheet' type='text/css'>
	<link href='demo.css' rel='stylesheet' type='text/css'>
</head>
<body>
	<div class="container">
		<h1 class="align-center">Simple Lightbox Demo Page</h1>
		<div class="gallery">
			<a href="images/image1.jpg" class="big"><img src="images/thumbs/thumb1.jpg" alt="" title="Beautiful Image" /></a>
			<a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title=""/></a>
			<a href="images/image3.jpg"><img src="images/thumbs/thumb3.jpg" alt="" title="Beautiful Image"/></a>
			<a href="images/image4.jpg"><img src="images/thumbs/thumb4.jpg" alt="" title=""/></a>
      <div class="clear"></div>
			<a href="images/image5.jpg"><img src="images/thumbs/thumb5.jpg" alt="" title=""/></a>
			<a href="images/image6.jpg"><img src="images/thumbs/thumb6.jpg" alt="" title=""/></a>
			<a href="images/image7.jpg" class="big"><img src="images/thumbs/thumb7.jpg" alt="" title=""/></a>
			<a href="images/image8.jpg"><img src="images/thumbs/thumb8.jpg" alt="" title=""/></a>
			<div class="clear"></div>
			<a href="images/image9.jpg" class="big"><img src="images/thumbs/thumb9.jpg" alt="" title=""/></a>
			<a href="images/image10.jpg"><img src="images/thumbs/thumb10.jpg" alt="" title=""/></a>
			<a href="images/image11.jpg"><img src="images/thumbs/thumb11.jpg" alt="" title=""/></a>
			<a href="images/image12.jpg"><img src="images/thumbs/thumb12.jpg" alt="" title=""/></a>
			<div class="clear"></div>
		</div>
	</div>
  
<script src="jquery-2.0.2.min.js"></script>
<script type="text/javascript" src="dist/simple-lightbox.js"></script>
<script>
	$(function(){
		var $gallery = $('.gallery a').simpleLightbox();
		$gallery.on('show.simplelightbox', function(){
			console.log('Requested for showing');
		})
		.on('shown.simplelightbox', function(){
			console.log('Shown');
		})
		.on('close.simplelightbox', function(){
			console.log('Requested for closing');
		})
		.on('closed.simplelightbox', function(){
			console.log('Closed');
		})
		.on('change.simplelightbox', function(){
			console.log('Requested for change');
		})
		.on('next.simplelightbox', function(){
			console.log('Requested for next');
		})
		.on('prev.simplelightbox', function(){
			console.log('Requested for prev');
		})
		.on('nextImageLoaded.simplelightbox', function(){
			console.log('Next image loaded');
		})
		.on('prevImageLoaded.simplelightbox', function(){
			console.log('Prev image loaded');
		})
		.on('changed.simplelightbox', function(){
			console.log('Image changed');
		})
		.on('nextDone.simplelightbox', function(){
			console.log('Image changed to next');
		})
		.on('prevDone.simplelightbox', function(){
			console.log('Image changed to prev');
		})
		.on('error.simplelightbox', function(e){
			console.log('No image found, go to the next/prev');
			console.log(e);
		});
	});
</script>
</body>
</html>

