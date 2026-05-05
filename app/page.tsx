'use client';

import { useState } from 'react';
import { ShoppingCart, Smartphone, Wifi, Zap, CreditCard, Users, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: Smartphone,
      title: 'Dispositivos Tecnológicos',
      description: 'Últimas tendencias en smartphones, laptops y accesorios',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: CreditCard,
      title: 'Pagos Digitales',
      description: 'Transacciones seguras y rápidas en línea',
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: Wifi,
      title: 'Servicios de Internet',
      description: 'Conectividad de alta velocidad para tu hogar',
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Zap,
      title: 'Servicios Esenciales',
      description: 'Pago de servicios al alcance de tu mano',
      color: 'bg-accent/10 text-accent',
    },
  ];

  const features = [
    { icon: ShoppingCart, text: 'Compra fácil y segura' },
    { icon: Users, text: 'Servicio al cliente 24/7' },
    { icon: Zap, text: 'Entrega rápida' },
    { icon: CreditCard, text: 'Múltiples formas de pago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border/20 backdrop-blur-sm">
        <div className="px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-card text-sm font-bold">M</span>
            </div>
            <h1 className="text-lg font-bold text-foreground">Maxi Servicios</h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="px-4 pb-4 border-t border-border/20 space-y-2">
            <a href="#" className="block py-2 text-sm text-muted-foreground">Servicios</a>
            <a href="#" className="block py-2 text-sm text-muted-foreground">Productos</a>
            <a href="#" className="block py-2 text-sm text-muted-foreground">Contacto</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 bg-gradient-to-b from-background via-background to-background/80">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
              Tu puerta a los servicios digitales
            </h2>
            <p className="text-base md:text-lg text-muted-foreground text-balance">
              La red líder en venta de artículos tecnológicos y servicios digitales en Colombia
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Comenzar ahora
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border">
              Conocer más
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Nuestros servicios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-lg border border-border/20 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-balance">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground text-balance">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Explorar <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-12 md:py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <p className="font-medium text-foreground">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary to-accent/50 rounded-xl p-8 md:p-12 text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground text-balance">
            Acceso a servicios esenciales en línea
          </h3>
          <p className="text-primary-foreground/90 text-balance">
            Facilita tu día a día con nuestras soluciones digitales confiables y seguras
          </p>
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Descargar aplicación
            <Zap className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 md:py-12 border-t border-border/20 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">Maxi Servicios</h4>
              <p className="text-sm text-muted-foreground">Red líder en servicios digitales y tecnología en Colombia</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Servicios</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Productos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Ayuda</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Maxi Servicios. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
