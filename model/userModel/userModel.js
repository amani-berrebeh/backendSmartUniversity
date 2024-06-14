class User {
    constructor(name, email, lockout_time,role, departement_id, email_verified_at, password, api_token, remember_token, current_team_id, profile_photo_path, two_factor_secret, two_factor_recovery_codes, two_factor_confirmed_at, app_name) {
      this.name = name;
      this.email = email;
      this.lockout_time = lockout_time;
      this.role = role;
      this.departement_id = departement_id;
      this.email_verified_at = email_verified_at;
      this.password = password;
      this.api_token = api_token;
      this.remember_token = remember_token;
      this.current_team_id = current_team_id;
      this.profile_photo_path = profile_photo_path;
      this.two_factor_secret = two_factor_secret;
      this.two_factor_recovery_codes = two_factor_recovery_codes;
      this.two_factor_confirmed_at = two_factor_confirmed_at;
      this.app_name = app_name;
    }
  }
  
  module.exports = User;