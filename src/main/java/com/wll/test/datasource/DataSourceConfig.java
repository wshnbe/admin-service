package com.wll.test.datasource;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import com.alibaba.druid.pool.DruidDataSource;


@Configuration
@MapperScan(basePackages = DataSourceConfig.PACKAGE, sqlSessionFactoryRef = "sqlSessionFactory")
public class DataSourceConfig {
    static final String PACKAGE = "com.wll.test.dao";
    static final String MAPPER_LOCATION = "classpath:mapper/*Mapper.xml";

    @Value("${spring.datasource.primary.url}")
    private String url;

    @Value("${spring.datasource.primary.username}")
    private String user;

    @Value("${spring.datasource.primary.password}")
    private String password;

    @Value("${spring.datasource.primary.driverClassName}")
    private String driverClass;

    @Bean(name = "dataSource")
    public DataSource secondaryDataSource() {
        DruidDataSource dataSource = new DruidDataSource();
        dataSource.setDriverClassName(driverClass);
        dataSource.setUrl(url);
        dataSource.setUsername(user);
        dataSource.setPassword(password);
        return dataSource;
    }

    @Bean(name = "transactionManager")
    public DataSourceTransactionManager secondaryTransactionManager() {
        return new DataSourceTransactionManager(secondaryDataSource());
    }

    @Bean(name = "sqlSessionFactory")
    public SqlSessionFactory clusterSqlSessionFactory(@Qualifier("dataSource") DataSource secondaryDataSource) throws Exception {
        final SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(secondaryDataSource);
        sessionFactory.setMapperLocations(new PathMatchingResourcePatternResolver()
                .getResources(DataSourceConfig.MAPPER_LOCATION));
        return sessionFactory.getObject();
    }
}
