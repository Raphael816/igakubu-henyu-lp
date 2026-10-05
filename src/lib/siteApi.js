import { supabase } from './supabase'

export async function listPublishedJobs() {
  const { data, error } = await supabase
    .from('job_postings')
    .select('id, title, employment_type, summary, description, requirements, sort_order')
    .order('sort_order')
  if (error) throw error
  return data ?? []
}

export async function getPublishedJob(id) {
  const { data, error } = await supabase
    .from('job_postings')
    .select('id, title, employment_type, summary, description, requirements')
    .eq('id', id)
    .maybeSingle()
  if (error) throw error
  return data
}

// Prefer: return=minimal で送るため、応募者本人を含め誰もこの行をSELECTでは
// 読み返せない(RLSはservice_role経由のadmin-apiのみにSELECTを許可している)。
export async function submitJobApplication({ jobPostingId, name, email, phone, message }) {
  const { error } = await supabase.from('job_applications').insert({
    job_posting_id: jobPostingId,
    name,
    email,
    phone: phone || null,
    message: message || null,
  })
  if (error) throw error
}
