'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mic2, Shield, Briefcase, Users, Heart, Sparkles, Brain } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { LocalizedString } from '@/types';

const modes = [
  {
    icon: Briefcase,
    title: { en: 'Professional Sales', es: 'Ventas Profesionales' },
    desc: { en: 'Master cold calls, objections, and closing.', es: 'Domina llamadas en frío, objeciones y cierres.' },
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    href: '/scenarios?cat=Sales',
  },
  {
    icon: Shield,
    title: { en: 'Executive Presence', es: 'Presencia Ejecutiva' },
    desc: { en: 'Brief CEOs and pitch investors with confidence.', es: 'Informa a CEOs y presenta a inversores con confianza.' },
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    href: '/scenarios?cat=Executive',
  },
  {
    icon: Users,
    title: { en: 'Social Mastery', es: 'Maestría Social' },
    desc: { en: 'Never run out of things to say at events.', es: 'Nunca te quedes sin nada que decir en eventos.' },
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    href: '/scenarios?cat=Social',
  },
  {
    icon: Heart,
    title: { en: 'Dating & Connection', es: 'Citas y Conexión' },
    desc: { en: 'Build attraction and authentic connection.', es: 'Construye atracción y conexión auténtica.' },
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    href: '/scenarios?cat=Dating',
  },
];

export default function HomePage() {
  const { language, t } = useLanguage();

  const getLR = (str: LocalizedString | string) => {
    if (typeof str === 'string') return str;
    return str[language] || str['en'];
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {t('homeHeroBadge')}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
            {t('homeHeroTitle')}
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('homeHeroSubtitle')}
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            {t('homeHeroDesc')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
              <Link href="/scenarios">
                {t('homeHeroStart')} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground border border-border">
              <Link href="/dashboard">{t('homeHeroProgress')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modes Grid */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            {t('homePathTitle')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modes.map((m) => {
              const Icon = m.icon;
              return (
                <Link
                  key={getLR(m.title)}
                  href={m.href}
                  className="glass rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:border-primary/30 border border-border/50 transition-all hover:shadow-lg hover:shadow-primary/5 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${m.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{getLR(m.title)}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{getLR(m.desc)}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h2 className="text-2xl font-bold text-foreground">{t('homeFeatureTitle')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
                <Mic2 className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-foreground">{t('homeFeatureVoiceTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('homeFeatureVoiceDesc')}</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-foreground">{t('homeFeatureFeedbackTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('homeFeatureFeedbackDesc')}</p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="font-semibold text-foreground">{t('homeFeatureSafeTitle')}</h3>
              <p className="text-sm text-muted-foreground">{t('homeFeatureSafeDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <p className="text-xs text-muted-foreground">
          {t('homeFooter')}
        </p>
      </footer>
    </main>
  );
}
