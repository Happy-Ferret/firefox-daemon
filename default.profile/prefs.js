# Mozilla User Preferences

/* Do not edit this file.
 *
 * If you make changes to this file while the application is running,
 * the changes will be overwritten when the application exits.
 *
 * To make a manual change to preferences, you can visit the URL about:config
 * For more information, see http://www.mozilla.org/unix/customizing.html#prefs
 */

user_pref("app.update.enabled", false);
user_pref("app.update.mode", 0);
user_pref("browser.cache.disk.capacity", 10000);
user_pref("browser.cache.memory.enable", false);
user_pref("browser.download.manager.retention", 0);
user_pref("browser.download.manager.showWhenStarting", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.history_expire_days", 0);
user_pref("browser.history_expire_days.mirror", 9);
user_pref("browser.preferences.advanced.selectedTabIndex", 2);
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.sessionstore.enabled", false);
user_pref("browser.startup.homepage", "http://localhost");
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("extensions.autohide.bars.PersonalToolbar", false);
user_pref("extensions.autohide.bars.PersonalToolbar.always", false);
user_pref("extensions.autohide.bars.nav-bar", false);
user_pref("extensions.autohide.bars.nav-bar.always", false);
user_pref("extensions.autohide.bars.tabBar", false);
user_pref("extensions.autohide.bars.tabBar.always", false);
user_pref("extensions.autohide.bars.toolbar-menubar", false);
user_pref("extensions.autohide.bars.toolbar-menubar.always", false);
user_pref("extensions.autohide.closedFull", false);
user_pref("extensions.autohide.closedZombie", false);
user_pref("extensions.autohide.newFull", false);
user_pref("extensions.autohide.noContext", false);
user_pref("extensions.autohide.statBar", false);
user_pref("extensions.autohide.statFloat", false);
user_pref("extensions.checkCompatibility", false);
user_pref("extensions.lastAppVersion", "2.0.0.14");
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.notifyUser", false);
user_pref("intl.charsetmenu.browser.cache", "ISO-8859-1, UTF-8");
user_pref("layout.spellcheckDefault", 0);
user_pref("network.cookie.prefsMigrated", true);
user_pref("network.http.max-connections-per-server", 4);
user_pref("pref.browser.homepage.disable_button.current_page", false);
user_pref("privacy.item.cookies", true);
user_pref("privacy.item.passwords", true);
user_pref("security.enable_java", false);
user_pref("security.enable_ssl3", false);
user_pref("security.enable_tls", false);
user_pref("security.warn_entering_secure", false);
user_pref("security.warn_entering_secure.show_once", false);
user_pref("security.warn_entering_weak", false);
user_pref("security.warn_entering_weak.show_once", false);
user_pref("security.warn_leaving_secure", false);
user_pref("security.warn_leaving_secure.show_once", false);
user_pref("security.warn_submit_insecure", false);
user_pref("security.warn_submit_insecure.show_once", false);
user_pref("security.warn_viewing_mixed", false);
user_pref("security.warn_viewing_mixed.show_once", false);
user_pref("signon.rememberSignons", false);

// Allow the hosts below to execute privileged script without warnings
user_pref("signed.applets.codebase_principal_support", true);

// Allow localhost to execute privileged scripts
user_pref("capability.principal.codebase.p1.granted", "UniversalXPConnect UniversalBrowserWrite");
user_pref("capability.principal.codebase.p1.id", "http://localhost");
user_pref("capability.principal.codebase.p1.subjectName", "");

user_pref("capability.principal.codebase.p2.granted", "UniversalXPConnect UniversalBrowserWrite");
user_pref("capability.principal.codebase.p2.id", "http://localhost:3000");
user_pref("capability.principal.codebase.p2.subjectName", "");

user_pref("capability.principal.codebase.p3.granted", "UniversalXPConnect UniversalBrowserWrite");
user_pref("capability.principal.codebase.p3.id", "http://localhost:8000");
user_pref("capability.principal.codebase.p3.subjectName", "");

user_pref("capability.principal.codebase.p4.granted", "UniversalXPConnect UniversalBrowserWrite");
user_pref("capability.principal.codebase.p4.id", "http://bart");
user_pref("capability.principal.codebase.p4.subjectName", "");

user_pref("capability.principal.codebase.p5.granted", "UniversalXPConnect UniversalBrowserWrite");
user_pref("capability.principal.codebase.p5.id", "http://bwemba");
user_pref("capability.principal.codebase.p5.subjectName", "");

