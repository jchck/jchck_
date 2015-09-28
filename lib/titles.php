<?php

namespace Roots\Sage\Titles;

/**
 *
 * Filter output of get_the_archive_title()
 * @link http://wordpress.stackexchange.com/a/175903
 *
 */
add_filter( 'get_the_archive_title', function ($title) {
  if (is_category()) {
    $title = single_cat_title( '', false );
  }
  return $title . ' Collection';
});

/**
 * Page titles
 */
function title() {
  if (is_home()) {
    if (get_option('page_for_posts', true)) {
      return get_the_title(get_option('page_for_posts', true));
    } else {
      return __('Latest Posts', 'sage');
    }
  } elseif (is_archive()) {
    return get_the_archive_title();
  } elseif (is_search()) {
    return sprintf(__('Search Results for %s', 'sage'), get_search_query());
  } elseif (is_404()) {
    return __('4 whoa 4', 'sage');
  } else {
    return get_the_title();
  }
}