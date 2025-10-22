===========================================
         📌 APP SETUP INSTRUCTIONS (FULL GUIDE)
===========================================

1️⃣ Rename File  
----------------  
Sabse pehle `example.env` file ka naam badal kar `.env` kar do.  
> ⚠️ Ye step skip mat karna, warna app configuration kaam nahi karega.

---

2️⃣ Configure Admin Credentials  
-------------------------------  
`.env` file ke andar apne admin login details set karo 👇  

```env
VITE_ADMIN_EMAIL=your-admin-email@example.com   # Yahan apna admin email daalo  
VITE_ADMIN_PASSWORD=yourpassword123             # Yahan apna admin password daalo  
```

> Ye credentials tumhare **Admin Panel login** ke liye use honge.  
> Secure password choose karna aur public repo me share **kabhi mat karna** 🔒  

---

3️⃣ Configure API  
-----------------  
API ka base URL `.env` file me set karo 👇  

```env
VITE_API_BASE_URL=/api  
```

Agar tum app ko apne domain pe host kar rahe ho, to niche wali line use karo 👇  
```env
VITE_API_BASE_URL=https://api.example.com/api
```

> Example: Agar tumhara backend `https://api.arvindnag.site/api` pe chal raha hai  
> to wahi URL likh dena.  

👉 Agar setup samajh nahi aaye, to mujhe WhatsApp kar sakte ho  
   (Contact info available at: [https://arvindnag.site](https://arvindnag.site)) 📱  

---

4️⃣ Supabase Configuration  
--------------------------  
Agar tumhara app **Supabase Database** use karta hai, to `.env` file me ye values set karo 👇  

```env
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co     # Yahan apna Supabase project URL daalo
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key               # Yahan apna Supabase Anon Key daalo
```

> Ye dono keys tumhe **Supabase Dashboard → Project Settings → API** section me milenge.  

---

🗄️ Supabase Database Structure (Tables Setup)  
----------------------------------------------  

### 1️⃣ `profiles` Table  
| Column Name | Type | Default Value | Description |
|--------------|------|---------------|--------------|
| id | uuid | `auth.uid()` | User ka unique ID (Auth se link hota hai) |
| email | text | *(empty)* | User ka email |
| full_name | text | *(empty)* | User ka full name |
| created_at | timestamptz | `now()` | Record creation time |
| updated_at | timestamptz | `now()` | Last update time |

---

### 2️⃣ `chat_conversations` Table  
| Column Name | Type | Default Value | Description |
|--------------|------|---------------|--------------|
| id | uuid | `gen_random_uuid()` | Conversation ka unique ID |
| user_id | uuid | *(empty)* | User ka ID (profiles.id se linked) |
| title | text | `New Conversation` | Conversation title |
| created_at | timestamptz | `now()` | Conversation start time |
| updated_at | timestamptz | `now()` | Last updated time |

---

### 3️⃣ `chat_messages` Table  
| Column Name | Type | Default Value | Description |
|--------------|------|---------------|--------------|
| id | uuid | `gen_random_uuid()` | Message ka unique ID |
| conversation_id | uuid | *(empty)* | Conversation ka ID (chat_conversations.id) |
| user_id | uuid | *(empty)* | Message sender ka ID |
| role | text | *(empty)* | Message role (e.g. user, assistant, system) |
| content | text | *(empty)* | Message text |
| attachments | jsonb | `[]` | Message ke media files |
| created_at | timestamptz | `now()` | Message creation time |

> ⚙️ Ye tables tum Supabase ke **Table Editor** me manually create kar sakte ho ya SQL Editor me `CREATE TABLE` queries se bana sakte ho.  

---

5️⃣ AI API Keys Configuration (Optional)  
----------------------------------------  
Agar tum app ke AI features ya OCR use karte ho, to niche wale keys `.env` me daalna zaruri hai 👇  

```env
# Hugging Face Inference API (Free tier available)
VITE_HUGGINGFACE_API_KEY=your-huggingface-api-key           # Yahan apna Hugging Face API key daalo

# Groq API (Free tier - fast inference)
VITE_GROQ_API_KEY=your-groq-api-key                         # Yahan apna Groq API key daalo

# OCR.space API (Free OCR for image text extraction)
VITE_OCR_API_KEY=your-ocr-api-key                           # Yahan apna OCR.space API key daalo
```

> Ye sab **optional** hain — agar app me AI features disable karne hain to blank chhod sakte ho.  
> Agar AI system use karte ho, to correct API keys zarur set karna.  

---

6️⃣ Install Dependencies  
------------------------  
Project ke dependencies install karne ke liye ye command chalao 👇  
```bash
npm install
```

---

7️⃣ Build Project  
-----------------  
App ko production ke liye build karne ke liye ye command chalao 👇  
```bash
npm run build
```

---

8️⃣ Start Project  
-----------------  
App ko run karne ke liye ye command use karo 👇  
```bash
npm run dev:full
```

> Iske baad tumhara project run ho jayega 🎉  

---

⚠️ Important  
-------------  
- `.env` rename karna **mat bhulna** (example.env → .env)  
- `.env` file public repo me upload **mat karna** ❌  
- Agar kuch update karo, to **server restart karna** na bhulna 🔁  
- Aur sabse important... **credits mat hatana!** 🙏  

---

❤️ **Developer's Note**  
------------------------  
> Please credits dena mat bhulna 🙏  
> Bahut mehnat lagi hai is app aur AI system banane me,  
> specially AI ke parts me bahut time aur dedication gaya hai 💻🧠  
> Agar tum is project ko use ya share karte ho,  
> to kindly likhna —  
> **Developed by RageXvenom** 💀🔥  

---

===========================================
✅ Setup Complete! Enjoy your app 🚀  
===========================================
