# 📘 Hybrid Professional Guide  
# **APP SETUP INSTRUCTIONS (FULL GUIDE)**

===========================================  
📌 **APP SETUP INSTRUCTIONS (FULL GUIDE)**  
===========================================

## 1️⃣ Rename File  
Sabse pehle `example.env` file ka naam badal kar `.env` kar do.  
> ⚠️ Ye step skip mat karna, warna app configuration kaam nahi karega.

---

## 2️⃣ Configure Admin Credentials  

`.env` file ke andar admin login set karo 👇  

```env
VITE_ADMIN_EMAIL=your-admin-email@example.com
VITE_ADMIN_PASSWORD=yourpassword123
```

Ye details **Admin Panel Login** ke liye use hoti hain.  
Secure password use karein, aur public repo me share *kabhi mat karein*.

---

## 3️⃣ Configure API  

```env
VITE_API_BASE_URL=/api
```

Agar domain use karte ho:

```env
VITE_API_BASE_URL=https://api.example.com/api
```

---

## 4️⃣ Supabase Configuration  

Agar tum Supabase use kar rahe ho to:

```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Keys mil jayengi:  
**Supabase Dashboard → Project Settings → API**


# ✨🪄 Supabase Database Structure
---

## 🌌 **1️⃣ Profiles Table**

| 🌟 Column | 🔮 Type | 📝 Description |
|----------|---------|----------------|
| **id** | `uuid` | Maps to `auth.uid()` |
| **email** | `text` | User email |
| **full_name** | `text` | Full name |
| **created_at** | `timestamptz` | Auto‑created |
| **updated_at** | `timestamptz` | Auto‑updated |

---

## 🚀 **2️⃣ Chat Conversations Table**

| ☄️ Column | 🔮 Type | 📝 Description |
|----------|---------|----------------|
| **id** | `uuid` | Primary key |
| **user_id** | `uuid` | FK → profiles(id) |
| **title** | `text` | Default: _"New Conversation"_ |
| **created_at** | `timestamptz` | Auto‑created |
| **updated_at** | `timestamptz` | Auto‑updated |

---

## 🔥 **3️⃣ Chat Messages Table**

| ⚡ Column | 🔮 Type | 📝 Description |
|----------|---------|----------------|
| **id** | `uuid` | Primary key |
| **conversation_id** | `uuid` | FK → chat_conversations(id) |
| **user_id** | `uuid` | FK → profiles(id) |
| **role** | `text` | Message owner (user / assistant) |
| **content** | `text` | Message text |
| **attachments** | `jsonb` | Attachments array |
| **created_at** | `timestamptz` | Auto‑created |

---

# 🛠️ Supabase SQL Editor – Database Creation Commands

## ✅ Create `profiles`
```sql
CREATE TABLE public.profiles (
  id uuid PRIMARY KEY DEFAULT auth.uid(),
  email text,
  full_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## ✅ Create `chat_conversations`
```sql
CREATE TABLE public.chat_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  title text DEFAULT 'New Conversation',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

## ✅ Create `chat_messages`
```sql
CREATE TABLE public.chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id uuid REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE,
  role text,
  content text,
  attachments jsonb DEFAULT '[]',
  created_at timestamptz DEFAULT now()
);
```

---

# 🧨 FULL DATA WIPE (ALL DATA + AUTH USERS)

⚠️ **WARNING:** Isse pura system reset ho jayega.  
- Saare chats delete  
- Saare profiles delete  
- Saare authentication users delete  

### 🔥 App Data Reset
```sql
DELETE FROM public.chat_messages;
DELETE FROM public.chat_conversations;
DELETE FROM public.profiles;
```

### 🔥 Supabase Auth Reset  
(Email already registered issue fix hota hai)

```sql
DELETE FROM auth.identities;
DELETE FROM auth.users;
```

### 🧹 Full Clean (Run All Together)
```sql
DELETE FROM public.chat_messages;
DELETE FROM public.chat_conversations;
DELETE FROM public.profiles;
DELETE FROM auth.identities;
DELETE FROM auth.users;
```

---

# 🤖 AI API Keys (Optional)

```env
VITE_HUGGINGFACE_API_KEY=your-huggingface-api-key
VITE_GROQ_API_KEY=your-groq-api-key
VITE_OCR_API_KEY=your-ocr-api-key
```

---

# 📦 Install Dependencies
```bash
npm install
```

---

# 🏗️ Build Project
```bash
npm run build
```

---

# 🚀 Start Project
```bash
npm run dev:full
```

---

# ⚠️ Important Notes  

- `.env` rename zaruri  
- `.env` public repo me upload **mat karna**  
- Har update ke baad **server restart**  
- Credits **mat hatana**  

---

# ❤️ Developer's Note  
> **Developed by Arvind Nag (RageXvenom)**  
> AI system + full backend + panel me bahut mehnat lagi hai.  
> Agar use karte ho to kindly credits zarur dena 🙏  

---

# 🎉 Setup Complete! Enjoy your App 🚀

