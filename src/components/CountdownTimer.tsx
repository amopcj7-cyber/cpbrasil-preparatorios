import { motion } from 'framer-motion';
import { Clock, Flame, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-transparent"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0A1F44] to-[#1A3A5C] rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12 text-center text-white">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 bg-[#FF6B35] rounded-full px-6 py-3 mb-6"
            >
              <Flame className="w-5 h-5" />
              <span className="font-bold text-lg">OFERTA ESPECIAL</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Vagas Limitadas!
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Garanta seu material com desconto especial antes que acabe
            </p>

            <div className="flex items-center justify-center gap-2 mb-8">
              <Clock className="w-6 h-6 text-[#FF6B35]" />
              <span className="text-lg font-semibold">Esta oferta expira em:</span>
            </div>

            <div className="flex justify-center gap-4 md:gap-8 mb-12">
              {[
                { label: 'Horas', value: timeLeft.hours },
                { label: 'Minutos', value: timeLeft.minutes },
                { label: 'Segundos', value: timeLeft.seconds },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl w-20 h-20 md:w-28 md:h-28 flex items-center justify-center mb-2">
                    <span className="text-3xl md:text-5xl font-bold text-[#FF6B35]">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm md:text-base text-gray-300 font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Users className="w-8 h-8 text-[#FF6B35] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">247</div>
                <div className="text-sm text-gray-300">Pessoas visualizando</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-[#FF6B35] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">89</div>
                <div className="text-sm text-gray-300">Vendas nas últimas 24h</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Flame className="w-8 h-8 text-[#FF6B35] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">43</div>
                <div className="text-sm text-gray-300">Vagas restantes</div>
              </div>
            </div>

            <motion.a
              href="#cursos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FF6B35] hover:bg-[#ff5722] text-white font-bold text-xl px-12 py-5 rounded-full shadow-2xl transition-all duration-300"
            >
              Garantir Minha Vaga Agora
            </motion.a>

            <p className="mt-6 text-sm text-gray-400">
              🔒 Pagamento 100% seguro | ⚡ Acesso imediato
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;
