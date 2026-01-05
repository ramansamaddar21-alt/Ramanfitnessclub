# Connect Your Hostinger Domain to Vercel

## 📋 **Step-by-Step Guide**

---

## **Part 1: Deploy to Vercel First**

### Step 1: Deploy Your Site
1. Go to **https://vercel.com**
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Select **"Ramanfitnessclub"**
5. Click **"Deploy"**
6. Wait for deployment to complete
7. You'll get a URL like: `ramanfitnessclub.vercel.app`

---

## **Part 2: Add Your Domain in Vercel**

### Step 2: Add Custom Domain
1. In Vercel, go to your project **"Ramanfitnessclub"**
2. Click **"Settings"** tab
3. Click **"Domains"** in the left sidebar
4. Click **"Add"** button
5. Enter your domain (e.g., `ramanfitness.com`)
6. Click **"Add"**

### Step 3: Choose Domain Type
Vercel will ask which domain you want:
- **Option A:** `ramanfitness.com` (root domain)
- **Option B:** `www.ramanfitness.com` (www subdomain)
- **Recommended:** Add BOTH

### Step 4: Get DNS Records from Vercel
Vercel will show you DNS records to add. You'll see something like:

**For Root Domain (ramanfitness.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW (www.ramanfitness.com):**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Keep this page open!** You'll need these values for Hostinger.

---

## **Part 3: Configure DNS in Hostinger**

### Step 5: Login to Hostinger
1. Go to **https://hostinger.com**
2. Login to your account
3. Go to **"Domains"** section
4. Find your domain and click **"Manage"**

### Step 6: Access DNS Settings
1. Click on **"DNS / Name Servers"** or **"DNS Zone"**
2. You'll see a list of DNS records

### Step 7: Add Vercel DNS Records

#### For Root Domain:
1. Click **"Add Record"** or **"Add New Record"**
2. Select **Type:** `A`
3. **Name/Host:** `@` (or leave blank)
4. **Points to/Value:** `76.76.21.21`
5. **TTL:** `3600` (or default)
6. Click **"Save"** or **"Add Record"**

#### For WWW Subdomain:
1. Click **"Add Record"** again
2. Select **Type:** `CNAME`
3. **Name/Host:** `www`
4. **Points to/Value:** `cname.vercel-dns.com`
5. **TTL:** `3600` (or default)
6. Click **"Save"** or **"Add Record"**

### Step 8: Remove Conflicting Records (Important!)
Look for any existing A or CNAME records for:
- `@` (root)
- `www`

**Delete these old records** to avoid conflicts!

---

## **Part 4: Verify Domain in Vercel**

### Step 9: Wait for DNS Propagation
1. Go back to Vercel
2. Click **"Refresh"** or **"Verify"**
3. DNS propagation takes **5 minutes to 48 hours** (usually 10-30 minutes)

### Step 10: Check Status
In Vercel Domains section, you'll see:
- ⏳ **Pending** - DNS not propagated yet
- ✅ **Valid** - Domain connected successfully!

---

## **Part 5: Test Your Domain**

### Step 11: Test Your Site
Once verified, visit:
- `https://ramanfitness.com`
- `https://www.ramanfitness.com`

Both should show your website! 🎉

---

## 🔧 **Troubleshooting**

### Domain Not Working?

**Check 1: DNS Propagation**
- Use: https://dnschecker.org
- Enter your domain
- Check if DNS has propagated globally

**Check 2: Verify DNS Records**
```bash
# Check A record
nslookup ramanfitness.com

# Check CNAME record
nslookup www.ramanfitness.com
```

**Check 3: Clear Browser Cache**
- Press `Ctrl + Shift + Delete`
- Clear cache and cookies
- Try again

**Check 4: Wait Longer**
- DNS can take up to 48 hours
- Usually works in 10-30 minutes

### Common Issues:

**Issue:** "Invalid Configuration"
- **Fix:** Make sure you deleted old A/CNAME records in Hostinger

**Issue:** "Domain already in use"
- **Fix:** Remove domain from any other Vercel projects first

**Issue:** SSL Certificate Error
- **Fix:** Wait 24 hours, Vercel auto-generates SSL certificates

---

## 📝 **Quick Reference**

### Vercel DNS Records:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### Hostinger DNS Settings Location:
```
Dashboard → Domains → Your Domain → DNS / Name Servers → DNS Zone
```

---

## ✅ **What You Get After Setup:**

- 🌐 Your custom domain works
- 🔒 Free SSL/HTTPS certificate
- ⚡ Fast global CDN
- 📱 Mobile optimized
- 🔄 Auto-deploy on git push

---

## 🎯 **Pro Tips:**

1. **Add both** `ramanfitness.com` and `www.ramanfitness.com`
2. **Set one as primary** in Vercel (redirects the other)
3. **Enable HTTPS** (automatic in Vercel)
4. **Test on mobile** after setup
5. **Update WhatsApp links** with your new domain

---

## 📞 **Need Help?**

- **Vercel Docs:** https://vercel.com/docs/concepts/projects/domains
- **Hostinger Support:** https://www.hostinger.com/tutorials/how-to-point-domain-to-vercel
- **DNS Checker:** https://dnschecker.org

---

**Your custom domain will be live soon! 🚀**
