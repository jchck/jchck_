<div class="flex justify-center items-end col-12" style="height: 100vh;">
	<button id="next" class="btn btn-primary">Next</button>
</div>

<script>
	var img	= [

		<?php while (have_posts()) : the_post(); ?>

			"<?php the_field('pic') ?>",

		<?php endwhile; ?>

	];

	$(img).each(function(){
		$("<img/>")[0].src = this;
	});

	$.backstretch(img);
</script>