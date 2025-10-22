/*
  # Setup Automated Message Cleanup Schedule

  ## Overview
  This migration creates a scheduled job using pg_cron to automatically
  delete chat messages older than 30 days. This ensures the database
  doesn't grow indefinitely and maintains performance.

  ## Changes
  1. Enable pg_cron extension
  2. Create a scheduled job to run the cleanup function daily
  3. The job runs at 2:00 AM UTC every day

  ## Important Notes
  - The cleanup function `delete_old_messages()` was created in the initial migration
  - This schedule ensures chat history is automatically cleaned up
  - Messages older than 30 days are permanently deleted
*/

CREATE EXTENSION IF NOT EXISTS pg_cron;

DO $$
BEGIN
  PERFORM cron.schedule(
    'cleanup-old-chat-messages',
    '0 2 * * *',
    'SELECT delete_old_messages()'
  );
EXCEPTION
  WHEN OTHERS THEN
    NULL;
END $$;