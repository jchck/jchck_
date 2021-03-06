<header class="col-12 sm-col-6">
	<?php get_template_part( 'templates/page', 'title' ); ?>
</header>

<div class="flex flex-wrap">

	<?php if (!have_posts()) : ?>
		<?php _e('Whoops! Nothing here.', 'jchck'); ?>
		<?php get_search_form(); ?>
	<?php endif; ?>

	<?php while (have_posts()) : the_post(); ?>
		<?php get_template_part('templates/content', get_post_type() != 'post' ? get_post_type() : get_post_format()); ?>
	<?php endwhile; ?>

	<?php the_posts_navigation(); ?>

</div>