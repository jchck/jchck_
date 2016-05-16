<?php

use Jchck\Wrapper;
use Jchck\Work;

?>

<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
	<div class="px3 lg-px4">
		<div class="flex flex-column">
			<?php if (!is_404()) {
				get_template_part( 'templates/header' );
			} ?>
			<div class="flex flex-wrap <?= Work\classes(); ?>">
				<?php include Wrapper\template_path(); ?>
			</div>
			<?php if (!is_404()) {
				get_template_part( 'templates/footer' ); 
			} ?>
		</div>
	</div>
	<?php wp_footer(); ?>
</body>
</html>