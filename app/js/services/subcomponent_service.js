angular.module("app").service("subcomponentService", function() {
var app_id, env_id;
    return {
        get_app_id: function() {
           return app_id;
        },
        set_app_id: function(id) {
           app_id = id;
        },
        get_env_id: function() {
           return env_id;
        },
        set_env_id: function(id) {
           env_id = id;
        }
    };
});
