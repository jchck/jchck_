<div class="container-fluid wrap">

	<div class="row middle-xs center-xs between-sm link">
		<div class="col-sm-6 col-xs-12">
			<h1 class="lead mt2 mb0 m0-xs mb2-sm mb3-md">Hi, I'm Justin Chick.<br />I'm a digital nomad and freelance front-end developer.</h1>
			<p class="m0">I live out of a backpack, learn every day, and help others do the same.</p>
		</div>
		<div class="col-sm-5 col-xs-12 first-xs last-sm last-md last-lg">
			<img style="width: 100%" src="<?php echo get_template_directory_uri() . '/dist/images/hat.jpg'; ?>">
		</div>
	</div>

	<div class="row border-top-gray border-bottom-gray pt3 mt4 pb3 mb4">
		<div class="col-sm-6 col-xs-12 p0">

			<a href="<?= esc_url(home_url('work')); ?>" class="flex flex-center color-box border-bottom-gray-sm cb-ht p2">
				<span class="hidden-xs"><?php get_template_part( 'templates/imac' ); ?></span>
				<div class="flex-auto ml1">
					<h2>Work Portfolio</h2>
				</div>
			</a>

		</div>

		<div class="col-sm-6 col-xs-12 p0">

			<a href="<?= esc_url(home_url('12-launches')); ?>" class="flex flex-center color-box cb-ht p2">
				<span class="hidden-xs"><?php get_template_part( 'templates/launches', 'launching' ); ?></span>
				<div class="flex-auto ml1">
					<h2>12 Launches</h2>
				</div>
			</a>

		</div>

	</div>

</div>

<div class="container-fluid wrap">
			
	<div class="row center-xs mt4">
		<div class="col-sm-10 col-xs-12">
			<div class="bg-off-white border-radius p1 p4-xs link">
				<?php get_template_part( 'templates/frontpage', 'copy' ); ?>
			</div>
		</div>
	</div>

</div>