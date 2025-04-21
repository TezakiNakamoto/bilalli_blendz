import { supabase } from './supabase'

const BUCKET_NAME = 'bilalli-images'

export const uploadImage = async (file: File, path: string) => {
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: true
      })

    if (error) throw error

    const { data: { publicUrl } } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(path)

    return publicUrl
  } catch (error) {
    console.error('Error uploading image:', error)
    throw error
  }
}

export const getImageUrl = (path: string) => {
  const { data: { publicUrl } } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(path)
  return publicUrl
}

export const deleteImage = async (path: string) => {
  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([path])
    
    if (error) throw error
  } catch (error) {
    console.error('Error deleting image:', error)
    throw error
  }
} 