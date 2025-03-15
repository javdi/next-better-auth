-- Set role to neondb_owner
SET ROLE "neondb_owner";
SELECT CURRENT_USER;

-- Create a user role for "better_auth" service
SELECT public.create_role(
  role_name => 'better_auth1',
  role_conn_limit => 25,
  neon_tech => TRUE
);

-- Grant base privileges to the user role
SELECT "public"."grant_user_role_base_privs"(
  role_name => 'better_auth'
);

-- Uncomment to set a password for login (if needed)
-- ALTER ROLE "better_auth" WITH INHERIT LOGIN PASSWORD 'dummy-password';

-- Grant "account_readwrite" permissions to the better_auth role
GRANT "account_readwrite" TO "better_auth";

-- Reset search_path to default
ALTER DATABASE current_database() RESET search_path;

-- Set search_path to include required schemas
ALTER DATABASE current_database() SET search_path TO public, extensions, tiger, tiger_data, account;

select * from search_path;

show search_path;


SELECT rolname AS role_name,
       pg_catalog.current_setting('search_path') AS search_path
FROM pg_roles;

ALTER ROLE better_auth SET search_path TO account;

show search_path;

ALTER ROLE better_auth SET search_path TO account;
REVOKE USAGE ON SCHEMA public FROM better_auth;
REVOKE CREATE ON SCHEMA public FROM better_auth;


SELECT rolname AS role_name, 
       unnest(rolconfig) AS search_path_config
FROM pg_roles
WHERE rolname = 'better_auth' 
  AND rolconfig IS NOT NULL;





