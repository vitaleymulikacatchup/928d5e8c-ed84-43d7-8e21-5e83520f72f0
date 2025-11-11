"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ChefHat, Sparkles, Crown, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="flat"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Bella Vista Pizzeria"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Authentic Italian Pizza"
          description="Experience the taste of Italy with our wood-fired pizzas made from traditional recipes and finest ingredients"
          tag="Fresh Daily"
          tagIcon={ChefHat}
          buttons={[
            {
              text: "View Menu",
              href: "pricing"
            },
            {
              text: "Order Now",
              href: "contact"
            }
          ]}
          imageSrc="https://pixabay.com/get/g9dab69ab75e2131959aeaea8bc5417c7441c123462249a7749b6afbd8f282bf727b24495fdcebab773340c373b1bd628898cab70430b9242d209ce22e360079a_1280.jpg"
          imageAlt="Authentic Italian pizza in wood-fired oven"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Bella Vista Pizzeria, we bring the authentic flavors of Naples to your table. Our family recipes have been passed down through generations, creating pizza magic since 1987."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Specialties"
          description="Discover our signature pizzas crafted with premium ingredients and traditional techniques"
          features={[
            {
              title: "Classic Margherita",
              description: "Fresh mozzarella, San Marzano tomatoes, and aromatic basil on our signature wood-fired crust",
              imageSrc: "https://pixabay.com/get/g2faa6fc81dd90c655c66e06edec90e4ef22003caffa948d3deb9a1c1cd5e32bf0d84ba10a9fc3165235307d0060b71ac3f6b386ac6b6b940957061577058f853_1280.jpg",
              imageAlt: "Classic Margherita pizza"
            },
            {
              title: "Pepperoni Supreme",
              description: "Premium pepperoni, mozzarella cheese, and our house tomato sauce on crispy thin crust",
              imageSrc: "https://pixabay.com/get/gd14fc2c984166efb1951edee1a5ba3ec43502ab3341e83b71e56b18dfd2d8fcfb2c83810f82c65fda234b85f2fb6184d14182995bc9279aff52d9e0e8da42ccc_1280.jpg",
              imageAlt: "Pepperoni Supreme pizza"
            },
            {
              title: "Quattro Stagioni",
              description: "Four seasons pizza with artichokes, ham, mushrooms, and olives representing each season",
              imageSrc: "https://pixabay.com/get/gf431399a1db83afebed474c294c9d1716128f9e523d7646fc867cfc4084ba41e926e701b36061df5fec2f58d1d0700fbafdb4a354dde8262298fd2362929651e_1280.jpg",
              imageAlt: "Quattro Stagioni pizza"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Pizzas"
          description="Our most popular pizzas loved by customers"
          products={[
            {
              id: "1",
              brand: "Traditional",
              name: "Margherita Classic",
              price: "$16.99",
              rating: 5,
              reviewCount: "342",
              imageSrc: "https://pixabay.com/get/g2faa6fc81dd90c655c66e06edec90e4ef22003caffa948d3deb9a1c1cd5e32bf0d84ba10a9fc3165235307d0060b71ac3f6b386ac6b6b940957061577058f853_1280.jpg",
              imageAlt: "Margherita Classic pizza"
            },
            {
              id: "2",
              brand: "Signature",
              name: "Pepperoni Supreme",
              price: "$19.99",
              rating: 5,
              reviewCount: "278",
              imageSrc: "https://pixabay.com/get/gd14fc2c984166efb1951edee1a5ba3ec43502ab3341e83b71e56b18dfd2d8fcfb2c83810f82c65fda234b85f2fb6184d14182995bc9279aff52d9e0e8da42ccc_1280.jpg",
              imageAlt: "Pepperoni Supreme pizza"
            },
            {
              id: "3",
              brand: "Gourmet",
              name: "Quattro Stagioni",
              price: "$22.99",
              rating: 4,
              reviewCount: "156",
              imageSrc: "https://pixabay.com/get/gf431399a1db83afebed474c294c9d1716128f9e523d7646fc867cfc4084ba41e926e701b36061df5fec2f58d1d0700fbafdb4a354dde8262298fd2362929651e_1280.jpg",
              imageAlt: "Quattro Stagioni pizza"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Pizza Menu"
          description="Choose from our authentic Italian pizzas made fresh daily"
          plans={[
            {
              id: "classic",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$16.99",
              subtitle: "Traditional flavors done right",
              features: [
                "Wood-fired crust",
                "San Marzano tomatoes",
                "Fresh mozzarella",
                "Aromatic basil",
                "Olive oil drizzle"
              ]
            },
            {
              id: "premium",
              badge: "Chef's Choice",
              badgeIcon: Crown,
              price: "$22.99",
              subtitle: "Gourmet ingredients and techniques",
              features: [
                "Artisan sourdough crust",
                "Imported Italian ingredients",
                "Premium toppings",
                "Truffle oil finish",
                "Aged parmesan"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Our Success Story"
          description="Numbers that reflect our commitment to excellence and customer satisfaction"
          metrics={[
            {
              id: "1",
              value: "36",
              description: "Years of Experience"
            },
            {
              id: "2",
              value: "15K+",
              description: "Happy Customers"
            },
            {
              id: "3",
              value: "500+",
              description: "Pizzas Made Daily"
            },
            {
              id: "4",
              value: "4.9",
              description: "Average Rating"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real reviews from pizza lovers who experienced our authentic Italian flavors"
          testimonials={[
            {
              id: "1",
              name: "Maria Rodriguez",
              role: "Food Blogger",
              testimonial: "The most authentic Italian pizza I've had outside of Naples. The wood-fired crust and fresh ingredients make all the difference.",
              imageSrc: "https://pixabay.com/get/g4895c4bc19439f7f8c669b2b0d35d7e7441f9d3263aaf6b54beb7a7f2a452193ccff74b82117a5f996e2e233e70a4d53b0d3d2f12d8e77fb196d200a92815c0f_1280.jpg",
              imageAlt: "Maria Rodriguez"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Local Food Critic",
              testimonial: "Bella Vista Pizzeria brings true Italian tradition to our neighborhood. Every bite is a journey to Italy.",
              imageSrc: "https://pixabay.com/get/g2c035b465ad8672887c012935beaa3a60cc7ac354a0d6fc252582662b768ee64f7155ac38a10994831eec11e62c8587ccfc5b578ab4988f19eedd304501bfca3_1280.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "3",
              name: "Sarah Chen",
              role: "Regular Customer",
              testimonial: "My family's favorite pizza place! The atmosphere is warm and the pizza is absolutely incredible every single time.",
              imageSrc: "https://pixabay.com/get/g7ca5422cd2d5a027a6a5dad0e770c3a4bc7b7ee2daaa322375c858e4bcd7c2f1852531ce1e4bfb78ef89b70ccfc3a9f20b4a80ffb31d0d6c3ee03166179ebda9_1280.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "4",
              name: "Antonio Rossi",
              role: "Italian Chef",
              testimonial: "As an Italian chef, I can confirm this is the real deal. Traditional recipes prepared with passion and authenticity.",
              imageSrc: "https://pixabay.com/get/gc0010c2fc16187c3d5e4f96c664733b046be468cdcd7e380ce33605ad107dc9649cbb4f8d7db8d4f9790245861529a62960fcff18c79a1e2b44d342279e47991_1280.jpg",
              imageAlt: "Antonio Rossi"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="As Featured In"
          description="Recognized by food critics and media outlets for our authentic Italian cuisine"
          logos={[
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp",
            "/placeholders/placeholder1.webp"
          ]}
          textboxLayout="default"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about our pizzeria and ordering process"
          faqs={[
            {
              id: "1",
              title: "Do you offer gluten-free options?",
              content: "Yes! We offer gluten-free crust made with rice flour and tapioca starch. Please inform us of any allergies when ordering."
            },
            {
              id: "2",
              title: "What are your delivery hours?",
              content: "We deliver from 4:00 PM to 10:00 PM Monday through Thursday, and 12:00 PM to 11:00 PM Friday through Sunday."
            },
            {
              id: "3",
              title: "Do you take reservations?",
              content: "Yes, we accept reservations for dine-in service. You can call us or book online through our website."
            },
            {
              id: "4",
              title: "Are your ingredients imported from Italy?",
              content: "We import key ingredients including San Marzano tomatoes, buffalo mozzarella, and extra virgin olive oil directly from Italy to ensure authenticity."
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Visit Us Today"
          description="Experience authentic Italian pizza in our warm, welcoming atmosphere. Reserve your table or place an order for pickup and delivery."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions...",
            rows: 4,
            required: false
          }}
          buttonText="Make Reservation"
          imageSrc="https://pixabay.com/get/gee035a1e98ec6e9abed8a9f5e26b4e01e7814f1f7b005fcb74606669a7774dc9f708fac648c3719d2ec9c1f48455d2f26e9a160d7e13538c83334c831fc3ac14_1280.jpg"
          imageAlt="Cozy interior of Bella Vista Pizzeria"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Bella Vista Pizzeria"
          columns={[
            {
              title: "Menu",
              items: [
                {
                  label: "Pizza Menu",
                  href: "pricing"
                },
                {
                  label: "Appetizers",
                  href: "feature"
                },
                {
                  label: "Desserts",
                  href: "feature"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Reviews",
                  href: "testimonial"
                },
                {
                  label: "FAQ",
                  href: "faq"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reserve Table",
                  href: "contact"
                },
                {
                  label: "Order Online",
                  href: "contact"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/bellavistapizzeria",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/bellavistapizzeria",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/bellavistapizza",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
          copyrightText="© 2025 Bella Vista Pizzeria. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}