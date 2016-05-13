<header class="lg-py4">
	<div class="flex flex-wrap items-center">
		<div>
			<a href="<?= esc_url(home_url('/')); ?>">
				<?php get_template_part( 'templates/logo', 'jc' ); ?>
			</a>
		</div>
		<div class="flex-auto"></div>
		<div>
			<?php
			if (has_nav_menu( 'primary_nav' )) :
				wp_nav_menu([ 'theme_location' => 'primary_nav', 'menu_class' => 'list-reset', 'items_wrap' => '<ul class="%2$s">%3$s</ul>']);
			endif;
			?>
		</div>
	</div>
</header>