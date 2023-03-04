/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
 export const preloadHandlebarsTemplates = async function() {
  return loadTemplates([

    // Actor partials.
    "systems/bearoncoke/templates/actor/parts/actor-features.html",
    "systems/bearoncoke/templates/actor/parts/actor-adversity.html",
    "systems/bearoncoke/templates/actor/parts/actor-stats.html",
    "systems/bearoncoke/templates/actor/parts/actor-npc-stats.html",
    "systems/bearoncoke/templates/actor/parts/actor-strengths.html",
    "systems/bearoncoke/templates/actor/parts/actor-trope.html",
  ]);
};
