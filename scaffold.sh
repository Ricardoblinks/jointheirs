#!/bin/bash

echo "📁 Scaffolding missing directories and files..."

# Helper function to create file with default export
create_component() {
  mkdir -p "$(dirname "$1")"
  echo "export default function $(basename "$1" .tsx)() { return <div>${2}</div>; }" > "$1"
}

# Pages and route components
declare -A ROUTES_COMPONENTS=(
  # GEMAEXPO
  ["src/app/(routes)/gemaexpo/components/GemaexpoHero.tsx"]="Hero section for GEMAEXPO"
  ["src/app/(routes)/gemaexpo/components/ParticipationSection.tsx"]="Participation opportunities"
  ["src/app/(routes)/gemaexpo/components/ImpactMetrics.tsx"]="Impact statistics"

  # BOIN
  ["src/app/(routes)/boin/components/BoinHero.tsx"]="BOIN hero section"
  ["src/app/(routes)/boin/components/ProgramsOffered.tsx"]="Available programs"
  ["src/app/(routes)/boin/components/CoverageMap.tsx"]="36 states coverage display"

  # SUPER-GUIDES
  ["src/app/(routes)/super-guides/components/EmpowermentHero.tsx"]="Empowerment hero"
  ["src/app/(routes)/super-guides/components/SkillsPrograms.tsx"]="Skills acquisition"
  ["src/app/(routes)/super-guides/components/SuccessStories.tsx"]="Beneficiary testimonials"

  # SONI
  ["src/app/(routes)/soni/components/SoniHero.tsx"]="SONI hero"
  ["src/app/(routes)/soni/components/InitiativeCategories.tsx"]="Initiative categories"
  ["src/app/(routes)/soni/components/NominationProcess.tsx"]="Nomination process"

  # ABOUT
  ["src/app/(routes)/about/components/LeadershipSection.tsx"]="Adanma profile"
  ["src/app/(routes)/about/components/CompanyHistory.tsx"]="Company history"
  ["src/app/(routes)/about/components/PartnerLogos.tsx"]="Partner logos"

  # CONTACT
  ["src/app/(routes)/contact/components/ContactForm.tsx"]="Contact form"
  ["src/app/(routes)/contact/components/LocationInfo.tsx"]="Location info"
)

for file in "${!ROUTES_COMPONENTS[@]}"; do
  create_component "$file" "${ROUTES_COMPONENTS[$file]}"
done

# UI Components
mkdir -p src/components/ui
for ui in Button Input Card Modal LoadingSpinner Badge Separator; do
  create_component "src/components/ui/$ui.tsx" "$ui component"
done

# Layout Components
create_component "src/components/layout/Navigation.tsx" "Navigation menu"
create_component "src/components/layout/MobileMenu.tsx" "Mobile menu"

# Home Components
mkdir -p src/components/home
for h in HeroSection StatsSection InitiativesOverview LeadershipHighlight PartnersSection TestimonialsSection; do
  create_component "src/components/home/$h.tsx" "$h component"
done

# Shared Components
mkdir -p src/components/shared
for s in ImpactCounter ImageGallery VideoEmbed SocialShare BackToTop; do
  create_component "src/components/shared/$s.tsx" "$s component"
done

# Forms
mkdir -p src/components/forms
for f in ContactForm RegistrationForm NominationForm VolunteerForm; do
  create_component "src/components/forms/$f.tsx" "$f component"
done

# Libs
mkdir -p src/lib
touch src/lib/{utils.ts,constants.ts,validations.ts,animations.ts,api.ts}

# Hooks
mkdir -p src/hooks
touch src/hooks/{useIntersectionObserver.ts,useLocalStorage.ts,useWindowSize.ts}

# Types
mkdir -p src/types
touch src/types/{index.ts,initiatives.ts,forms.ts}

# Data
mkdir -p src/data
touch src/data/{initiatives.ts,partners.ts,testimonials.ts}

# Config files if missing
[ ! -f tailwind.config.ts ] && touch tailwind.config.ts
[ ! -f .env.example ] && touch .env.example
[ ! -f .env.local ] && touch .env.local
[ ! -f netlify.toml ] && touch netlify.toml

echo "✅ Scaffolding complete!"
